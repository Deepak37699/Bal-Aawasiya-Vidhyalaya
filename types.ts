import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface EventItem {
  title: string;
  date: string;
  description: string;
}

export interface FacilityItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}