'use client';

import { useMemo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { 
  useReactTable, 
  getCoreRowModel, 
  flexRender,
  createColumnHelper
} from '@tanstack/react-table';
import { FinancialProduct } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, Heart, GitCompare as Compare } from 'lucide-react';
import { useFilterStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

const columnHelper = createColumnHelper<FinancialProduct>();

interface ProductsTableProps {
  products: FinancialProduct[];
}

export function ProductsTable({ products }: ProductsTableProps) {
  const { selectedProducts, toggleProductSelection } = useFilterStore();
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const columns = useMemo(() => [
    columnHelper.display({
      id: 'selection',
      header: 'Compare',
      cell: ({ row }) => (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toggleProductSelection(row.original.id)}
          className={cn(
            'w-8 h-8 p-0',
            selectedProducts.includes(row.original.id) && 'bg-blue-50 text-blue-600'
          )}
        >
          <Compare className="w-4 h-4" />
        </Button>
      ),
      size: 80,
    }),
    columnHelper.accessor('name', {
      header: 'Product',
      cell: ({ row, getValue }) => (
        <div className="flex items-center space-x-3 min-w-0">
          <img 
            src={row.original.imageUrl} 
            alt={getValue()}
            className="w-12 h-8 object-cover rounded-lg bg-slate-100 flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="font-medium text-slate-900 truncate">
              {getValue()}
            </div>
            <div className="text-sm text-slate-500 truncate">
              {row.original.provider}
            </div>
          </div>
        </div>
      ),
      size: 280,
    }),
    columnHelper.accessor('rating', {
      header: 'Rating',
      cell: ({ getValue }) => (
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{getValue()}</span>
        </div>
      ),
      size: 100,
    }),
    columnHelper.accessor('annualFee', {
      header: 'Annual Fee',
      cell: ({ getValue }) => (
        <div className="font-medium">
          {getValue() === 0 ? (
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              No Fee
            </Badge>
          ) : (
            `$${getValue()}`
          )}
        </div>
      ),
      size: 120,
    }),
    columnHelper.accessor('interestRate', {
      header: 'Interest Rate',
      cell: ({ row, getValue }) => (
        <div className="space-y-1">
          <div className="font-medium">{getValue()}%</div>
          {row.original.introRate !== undefined && (
            <div className="text-xs text-blue-600">
              {row.original.introRate}% intro
            </div>
          )}
        </div>
      ),
      size: 120,
    }),
    columnHelper.accessor('cashBackRate', {
      header: 'Rewards',
      cell: ({ row, getValue }) => {
        const cashBack = getValue();
        const points = row.original.pointsMultiplier;
        
        if (cashBack) {
          return <div className="font-medium">{cashBack}% cashback</div>;
        }
        if (points) {
          return <div className="font-medium">{points}x points</div>;
        }
        return <div className="text-slate-400">—</div>;
      },
      size: 120,
    }),
    columnHelper.accessor('minCreditScore', {
      header: 'Min Credit',
      cell: ({ getValue }) => (
        <div className="font-medium">{getValue()}</div>
      ),
      size: 100,
    }),
    columnHelper.accessor('features', {
      header: 'Key Features',
      cell: ({ getValue }) => (
        <div className="space-y-1">
          {getValue().slice(0, 2).map((feature, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs mr-1 mb-1"
            >
              {feature}
            </Badge>
          ))}
          {getValue().length > 2 && (
            <div className="text-xs text-slate-500">
              +{getValue().length - 2} more
            </div>
          )}
        </div>
      ),
      size: 200,
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={row.original.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              View
            </a>
          </Button>
        </div>
      ),
      size: 120,
    }),
  ], [selectedProducts, toggleProductSelection]);

  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 80,
    overscan: 10,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();

  return (
    <Card className="overflow-hidden">
      {/* Table Header */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="flex items-center justify-between p-4">
          <div>
            <h3 className="font-semibold text-slate-900">
              Products Comparison Table
            </h3>
            <p className="text-sm text-slate-600">
              {products.length} products • Virtual scrolling enabled
            </p>
          </div>
          {selectedProducts.length > 0 && (
            <Badge variant="default" className="bg-blue-600">
              {selectedProducts.length} selected
            </Badge>
          )}
        </div>
      </div>

      {/* Table Container */}
      <div 
        ref={tableContainerRef}
        className="overflow-auto h-[600px] relative"
      >
        {/* Table Header Row */}
        <div className="sticky top-0 bg-white border-b border-slate-200 z-10">
          {table.getHeaderGroups().map(headerGroup => (
            <div key={headerGroup.id} className="flex">
              {headerGroup.headers.map(header => (
                <div
                  key={header.id}
                  className="px-4 py-3 text-left text-sm font-medium text-slate-700 bg-slate-50 border-r border-slate-200 last:border-r-0"
                  style={{ width: header.getSize() }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Virtual Table Body */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: 'relative',
          }}
        >
          {virtualRows.map((virtualRow) => {
            const row = rows[virtualRow.index];
            return (
              <div
                key={row.id}
                className="absolute top-0 left-0 w-full flex hover:bg-slate-50 transition-colors"
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {row.getVisibleCells().map(cell => (
                  <div
                    key={cell.id}
                    className="px-4 py-3 text-sm border-r border-slate-100 last:border-r-0 flex items-center"
                    style={{ width: cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Table Footer */}
      {selectedProducts.length > 0 && (
        <div className="border-t border-slate-200 p-4 bg-blue-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-blue-700">
              {selectedProducts.length} products selected for comparison
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Compare Selected
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}