import React from 'react';
import { KitItem, Religion } from '../types';
import { Check, Plus, X } from 'lucide-react';

interface KitSelectorProps {
  religion: Religion;
  availableItems: KitItem[];
  selectedItems: KitItem[];
  onToggleItem: (item: KitItem) => void;
}

export function KitSelector({ religion, availableItems, selectedItems, onToggleItem }: KitSelectorProps) {
  const kafanItems = availableItems.filter(item => item.category === 'kafan');
  const antimVastraItems = availableItems.filter(item => item.category === 'antim-vastra');
  const essentialItems = availableItems.filter(item => item.category === 'essential');
  const regionalItems = availableItems.filter(item => item.category === 'regional');
  const casteItems = availableItems.filter(item => item.category === 'caste');

  const isSelected = (item: KitItem) => selectedItems.some(selected => selected.id === item.id);

  // Check if user has selected a kafan (for Muslim religion)
  const hasSelectedKafan = religion.id === 'muslim' ? kafanItems.some(item => isSelected(item)) : true;
  const kafanSelectionCount = kafanItems.filter(item => isSelected(item)).length;
  
  // Check if user has selected antim vastra (for Hindu religion)
  const hasSelectedAntimVastra = religion.id === 'hindu' ? antimVastraItems.some(item => isSelected(item)) : true;
  const antimVastraSelectionCount = antimVastraItems.filter(item => isSelected(item)).length;

  const ItemCard = ({ item, canToggle = true }: { item: KitItem; canToggle?: boolean }) => {
    const selected = isSelected(item);
    
    // For kafan items, only allow one selection
    const isKafanItem = item.category === 'kafan';
    const canSelectKafan = !isKafanItem || kafanSelectionCount === 0 || selected;
    
    // For antim vastra items, only allow one selection
    const isAntimVastraItem = item.category === 'antim-vastra';
    const canSelectAntimVastra = !isAntimVastraItem || antimVastraSelectionCount === 0 || selected;
    
    const canSelect = canSelectKafan && canSelectAntimVastra;
    
    return (
      <div
        className={`bg-white rounded-lg p-4 border-2 transition-all duration-300 ${
          selected ? 'border-green-500 shadow-md' : 'border-gray-200'
        } ${canToggle && canSelect ? 'cursor-pointer hover:shadow-md hover:border-blue-300' : 'opacity-75'}`}
        onClick={canToggle && canSelect ? () => onToggleItem(item) : undefined}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              {item.required && (
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                  Required
                </span>
              )}
              {isKafanItem && (
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  Choose One
                </span>
              )}
              {isAntimVastraItem && (
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  Choose One
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <p className="font-bold text-lg text-blue-600">₹{item.price}</p>
          </div>
          <div className="ml-4">
            {item.required ? (
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Check size={16} className="text-white" />
              </div>
            ) : selected ? (
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Check size={16} className="text-white" />
              </div>
            ) : canSelect ? (
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-100">
                <Plus size={16} className="text-gray-600" />
              </div>
            ) : (
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-400 text-xs">N/A</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {religion.name} Last Rites Kit
        </h2>
        <p className="text-gray-600">Select items for your ceremony</p>
      </div>

      {/* Antim Vastra Selection (Hindu only) */}
      {religion.id === 'hindu' && antimVastraItems.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Antim Vastra Selection (Choose One)
          </h3>
          {!hasSelectedAntimVastra && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 text-sm font-medium">
                Please select either Male or Female Antim Vastra to proceed with your arrangement.
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {antimVastraItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Kafan Selection (Muslim only) */}
      {religion.id === 'muslim' && kafanItems.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Kafan Selection (Choose One)
          </h3>
          {!hasSelectedKafan && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 text-sm font-medium">
                Please select either Male or Female Kafan to proceed with your arrangement.
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kafanItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Basic Kit Items */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          Basic Kit (Included)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {essentialItems.map((item) => (
            <ItemCard key={item.id} item={item} canToggle={false} />
          ))}
        </div>
      </div>

      {/* Add-on Items */}
      {regionalItems.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Add-on Items (Optional)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regionalItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Caste/Denomination Items */}
      {casteItems.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Caste/Sect Specific (Optional)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {casteItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Price Summary */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        {religion.id === 'hindu' && !hasSelectedAntimVastra && (
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 font-medium text-center">
              ⚠️ Please select an Antim Vastra option above to see the complete pricing
            </p>
          </div>
        )}
        {religion.id === 'muslim' && !hasSelectedKafan && (
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 font-medium text-center">
              ⚠️ Please select a Kafan option above to see the complete pricing
            </p>
          </div>
        )}
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Total Kit Price</h4>
            <p className="text-gray-600 text-sm">{selectedItems.length} items selected</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">₹{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}