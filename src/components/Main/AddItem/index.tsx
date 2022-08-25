import React from 'react';
import { TItem } from '../Item';
import './AddItem.css';

type AddItemProps = {
  handleAddItem: (item: TItem) => void;
};

export default function AddItem({ handleAddItem }: AddItemProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add types for event.target.item and event.target.reset
    const target = event.target as typeof event.target & {
      item: { value: string };
      reset: () => void;
    };
    handleAddItem({ message: target.item.value, checked: false });
    target.reset();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='item'
        placeholder='add details'
        className='form__input'
      />
      <button type='submit' className='form__button'>
        Add
      </button>
    </form>
  );
}
