
import React, { useState } from 'react';
import { toast } from 'sonner';
import { ArrowLeft, PlusCircle, Calendar, DollarSign, Tag, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors animate-fade-in">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg bg-${expense.category.color}-100 flex items-center justify-center`}>
          {expense.category.icon}
        </div>
        <div>
          <h3 className="font-medium">{expense.description}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={14} />
            <span>{expense.date}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-semibold">${expense.amount.toLocaleString()}</span>
        <button 
          className="text-red-500 hover:text-red-700 transition-colors"
          onClick={() => onDelete(expense.id)}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

const expenseCategories = {
  accommodation: { 
    name: 'Accommodation', 
    icon: <Trash2 size={16} className="text-blue-500" />, 
    color: 'blue' 
  },
  transportation: { 
    name: 'Transportation', 
    icon: <Trash2 size={16} className="text-green-500" />, 
    color: 'green' 
  },
  food: { 
    name: 'Food & Dining', 
    icon: <Trash2 size={16} className="text-orange-500" />, 
    color: 'orange' 
  },
  activities: { 
    name: 'Activities', 
    icon: <Trash2 size={16} className="text-purple-500" />, 
    color: 'purple' 
  },
  shopping: { 
    name: 'Shopping', 
    icon: <Trash2 size={16} className="text-pink-500" />, 
    color: 'pink' 
  },
  other: { 
    name: 'Other', 
    icon: <Trash2 size={16} className="text-gray-500" />, 
    color: 'gray' 
  },
};

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Hotel Panorama',
      amount: 950,
      date: '2023-06-15',
      category: expenseCategories.accommodation
    },
    {
      id: 2,
      description: 'Flight to Paris',
      amount: 1200,
      date: '2023-06-12',
      category: expenseCategories.transportation
    },
    {
      id: 3,
      description: 'Le Bistro Restaurant',
      amount: 120,
      date: '2023-06-16',
      category: expenseCategories.food
    },
    {
      id: 4,
      description: 'Louvre Museum',
      amount: 75,
      date: '2023-06-17',
      category: expenseCategories.activities
    },
    {
      id: 5,
      description: 'Souvenir Shopping',
      amount: 200,
      date: '2023-06-18',
      category: expenseCategories.shopping
    }
  ]);
  
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    date: '',
    category: 'accommodation'
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({
      ...newExpense,
      [name]: value
    });
  };
  
  const handleAddExpense = (e) => {
    e.preventDefault();
    
    if (!newExpense.description || !newExpense.amount || !newExpense.date || !newExpense.category) {
      toast.error('Please fill all fields');
      return;
    }
    
    const expenseToAdd = {
      id: expenses.length + 1,
      description: newExpense.description,
      amount: parseFloat(newExpense.amount),
      date: newExpense.date,
      category: expenseCategories[newExpense.category]
    };
    
    setExpenses([...expenses, expenseToAdd]);
    setNewExpense({
      description: '',
      amount: '',
      date: '',
      category: 'accommodation'
    });
    
    toast.success('Expense added successfully!');
  };
  
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
    toast.success('Expense deleted successfully!');
  };
  
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Link to="/" className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft size={16} />
              </Link>
              <h1 className="text-2xl font-semibold">Expense Tracker</h1>
            </div>
            
            <div className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow">
              <span className="text-sm">Total Expenses</span>
              <div className="text-xl font-bold">${totalExpenses.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="bg-white rounded-xl shadow p-6 animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
                
                <div className="space-y-2">
                  {expenses.map((expense) => (
                    <ExpenseItem 
                      key={expense.id} 
                      expense={expense} 
                      onDelete={handleDeleteExpense}
                    />
                  ))}
                  
                  {expenses.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p>No expenses found. Add one to get started!</p>
                    </div>
                  )}
                </div>
              </section>
            </div>
            
            <div>
              <section className="bg-white rounded-xl shadow p-6 animate-scale-in">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-lg">Add New Expense</h3>
                  <PlusCircle className="text-teal-500" size={20} />
                </div>
                
                <form onSubmit={handleAddExpense}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <input
                        type="text"
                        name="description"
                        placeholder="Hotel, flight, meal..."
                        className="input-field"
                        value={newExpense.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input
                          type="number"
                          name="amount"
                          placeholder="0.00"
                          className="input-field pl-10"
                          min="0"
                          step="0.01"
                          value={newExpense.amount}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input
                          type="date"
                          name="date"
                          className="input-field pl-10"
                          value={newExpense.date}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <div className="relative">
                        <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <select
                          name="category"
                          className="input-field pl-10 appearance-none"
                          value={newExpense.category}
                          onChange={handleInputChange}
                        >
                          {Object.entries(expenseCategories).map(([key, category]) => (
                            <option key={key} value={key}>{category.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <button type="submit" className="btn-teal w-full mt-6">
                      Add Expense
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Expenses;
