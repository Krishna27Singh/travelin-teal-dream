
import React from 'react';
import { 
  Bed, 
  Train, 
  Utensils, 
  Ticket 
} from 'lucide-react';

const ExpenseItem = ({ icon, category, amount, color }) => {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors animate-fade-in">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
          {icon}
        </div>
        <span className="font-medium text-gray-700">{category}</span>
      </div>
      <span className="font-semibold">${amount.toLocaleString()}</span>
    </div>
  );
};

const ExpenseChart = () => {
  const expenses = [
    { 
      icon: <Bed className="text-blue-500" size={20} />, 
      category: 'Accommodation', 
      amount: 2450,
      color: 'bg-blue-100' 
    },
    { 
      icon: <Train className="text-green-500" size={20} />, 
      category: 'Transportation', 
      amount: 1800,
      color: 'bg-green-100' 
    },
    { 
      icon: <Utensils className="text-orange-500" size={20} />, 
      category: 'Food & Dining', 
      amount: 950,
      color: 'bg-orange-100' 
    },
    { 
      icon: <Ticket className="text-purple-500" size={20} />, 
      category: 'Activities', 
      amount: 750,
      color: 'bg-purple-100' 
    },
  ];

  return (
    <div className="space-y-2">
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} {...expense} />
      ))}
    </div>
  );
};

export default ExpenseChart;
