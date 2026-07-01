/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TanningMachine {
  id: string;
  name: string;
  type: 'standing' | 'lying';
  tubes: string; // e.g. "Chocolate Brown"
  description: string;
  features: string[];
  maxMinutes: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  initials: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  price: string;
  iconName: string;
  details?: string[];
}

export interface SkinType {
  type: number;
  name: string;
  description: string;
  tanTendency: string;
  recommendedMinutes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
