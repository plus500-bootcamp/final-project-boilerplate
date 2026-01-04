/**
 * Task priority levels
 */
export type Priority = 'low' | 'medium' | 'high';

/**
 * Filter status options
 */
export type FilterStatus = 'all' | 'uncompleted';

/**
 * Task interface representing a single task item
 */
export interface Task {
    id: string;
    text: string;
    priority: Priority;
    completed: boolean;
    createdAt: number;
}

/**
 * Filter state for tasks
 */
export interface Filter {
    status: FilterStatus;
    priority: Priority | 'all';
}
