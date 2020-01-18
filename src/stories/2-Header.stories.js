import React from 'react';
import { action } from '@storybook/addon-actions';
import { Header } from '@storybook/react/demo';

export default {
  title: 'Header',
  component: Header,
};

export const Text = () => <span onClick={action('clicked')}>Hello Button</span>;