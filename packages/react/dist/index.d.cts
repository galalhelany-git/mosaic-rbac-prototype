import * as react from 'react';
import { HTMLAttributes, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, DialogHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactElement } from 'react';

interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'title'> {
    children: ReactNode;
    defaultOpen?: boolean;
    disabled?: boolean;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    onOpenChange?: (open: boolean) => void;
    open?: boolean;
    title: ReactNode;
}
declare const Accordion: react.ForwardRefExoticComponent<AccordionProps & react.RefAttributes<HTMLDivElement>>;

type AvatarShape = 'square' | 'rounded' | 'circle';
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarStatus = 'online' | 'offline';
interface AvatarProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
    alt?: string;
    disabled?: boolean;
    initials?: string;
    name: string;
    roleBadge?: ReactNode;
    shape?: AvatarShape;
    size?: AvatarSize;
    src?: string;
    status?: AvatarStatus;
}
declare const Avatar: react.ForwardRefExoticComponent<AvatarProps & react.RefAttributes<HTMLSpanElement>>;

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'error';
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    rounded?: boolean;
    variant?: BadgeVariant;
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'tertiary';
type ButtonBaseProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    children: ReactNode;
    leadingIcon?: ReactNode;
    size?: ButtonSize;
    trailingIcon?: ReactNode;
};
type LoadableButtonProps = {
    loading?: boolean;
    variant?: Exclude<ButtonVariant, 'tertiary'>;
};
type TertiaryButtonProps = {
    loading?: never;
    variant: 'tertiary';
};
type ButtonProps = ButtonBaseProps & (LoadableButtonProps | TertiaryButtonProps);

declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

type ButtonGroupOrientation = 'horizontal' | 'vertical';
interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    label: string;
    orientation?: ButtonGroupOrientation;
}
declare const ButtonGroup: react.ForwardRefExoticComponent<ButtonGroupProps & react.RefAttributes<HTMLDivElement>>;

interface BreadcrumbItem {
    href?: string;
    label: ReactNode;
    onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
}
interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
    items: BreadcrumbItem[];
    label?: string;
    maxItems?: number;
    moreLabel?: string;
}
declare const Breadcrumb: react.ForwardRefExoticComponent<BreadcrumbProps & react.RefAttributes<HTMLElement>>;

interface DateRange {
    end?: Date;
    start?: Date;
}
interface CalendarPreset {
    label: string;
    value: Date | DateRange;
}
interface CalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    disabledDate?: (date: Date) => boolean;
    locale?: string;
    mode?: 'single' | 'range';
    month?: Date;
    nextMonthLabel?: string;
    onChange?: (value: Date | DateRange) => void;
    onMonthChange?: (month: Date) => void;
    presetsLabel?: string;
    presets?: CalendarPreset[];
    previousMonthLabel?: string;
    value?: Date | DateRange;
    weekStartsOn?: 0 | 1;
}
declare const Calendar: react.ForwardRefExoticComponent<CalendarProps & react.RefAttributes<HTMLDivElement>>;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    indeterminate?: boolean;
    label: ReactNode;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

type IconButtonSize = 'sm' | 'md' | 'lg';
interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label' | 'children'> {
    'aria-label': string;
    icon: ReactNode;
    loading?: boolean;
    notification?: ReactNode;
    size?: IconButtonSize;
}
declare const IconButton: react.ForwardRefExoticComponent<IconButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface CloseButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    selected?: boolean;
    size?: IconButtonSize;
}
declare const CloseButton: react.ForwardRefExoticComponent<CloseButtonProps & react.RefAttributes<HTMLButtonElement>>;

type DividerOrientation = 'horizontal' | 'vertical';
type DividerSize = 'sm' | 'md' | 'lg' | 'hg';
type DividerVariant = 'solid' | 'dashed';
interface DividerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    label?: ReactNode;
    orientation?: DividerOrientation;
    size?: DividerSize;
    variant?: DividerVariant;
}
declare function Divider({ className, label, orientation, size, variant, ...props }: DividerProps): react.JSX.Element;

interface DashboardToggleOption {
    icon?: ReactNode;
    label: string;
    value: string;
}
interface DashboardToggleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    defaultValue?: string;
    label?: string;
    onValueChange?: (value: string) => void;
    options: DashboardToggleOption[];
    value?: string;
}
declare const DashboardToggle: react.ForwardRefExoticComponent<DashboardToggleProps & react.RefAttributes<HTMLDivElement>>;

interface DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    defaultValue?: Date | DateRange;
    disabled?: boolean;
    label: string;
    locale?: string;
    mode?: 'single' | 'range';
    onValueChange?: (value: Date | DateRange) => void;
    placeholder?: string;
    presets?: CalendarPreset[];
    value?: Date | DateRange;
}
declare const DatePicker: react.ForwardRefExoticComponent<DatePickerProps & react.RefAttributes<HTMLDivElement>>;

interface DialogHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    align?: 'start' | 'center';
    description?: ReactNode;
    padding?: 0 | 16 | 24;
    size?: 'sm' | 'md' | 'lg';
    title: ReactNode;
    titleId?: string;
}
declare const DialogHeader: react.ForwardRefExoticComponent<DialogHeaderProps & react.RefAttributes<HTMLDivElement>>;
interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
    align?: 'start' | 'end' | 'split';
    fullWidth?: boolean;
    padding?: 0 | 16 | 24;
}
declare const DialogFooter: react.ForwardRefExoticComponent<DialogFooterProps & react.RefAttributes<HTMLDivElement>>;
interface DialogProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'open' | 'title'> {
    children: ReactNode;
    closeLabel?: string;
    description?: ReactNode;
    footer?: ReactNode;
    onOpenChange?: (open: boolean) => void;
    open: boolean;
    showCloseButton?: boolean;
    size?: 'default' | 'full';
    title: ReactNode;
}
declare const Dialog: react.ForwardRefExoticComponent<DialogProps & react.RefAttributes<HTMLDialogElement>>;

interface FileUploaderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    description?: ReactNode;
    label?: ReactNode;
    onFiles?: (files: File[]) => void;
    progress?: number;
    uploading?: boolean;
    variant?: 'base' | 'alternate';
}
declare const FileUploader: react.ForwardRefExoticComponent<FileUploaderProps & react.RefAttributes<HTMLInputElement>>;

type InputType = 'file' | 'text';
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children' | 'size' | 'type'> {
    action?: ReactNode;
    counter?: boolean;
    errorMessage?: ReactNode;
    helpText?: ReactNode;
    horizontal?: boolean;
    label: ReactNode;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    type?: InputType;
}

declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';
interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    'aria-label': string;
    max?: number;
    size?: ProgressSize;
    value: number;
}
declare function Progress({ 'aria-label': ariaLabel, className, max, size, value, ...props }: ProgressProps): react.JSX.Element;

interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
    currentPage: number;
    label?: string;
    nextAriaLabel?: string;
    nextLabel?: string;
    onPageChange: (page: number) => void;
    pageLabel?: (page: number) => string;
    previousAriaLabel?: string;
    previousLabel?: string;
    siblingCount?: number;
    totalPages: number;
}
declare const Pagination: react.ForwardRefExoticComponent<PaginationProps & react.RefAttributes<HTMLElement>>;

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: ReactNode;
}
declare const Radio: react.ForwardRefExoticComponent<RadioProps & react.RefAttributes<HTMLInputElement>>;

interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    'aria-label': string;
}
declare const SearchField: react.ForwardRefExoticComponent<SearchFieldProps & react.RefAttributes<HTMLInputElement>>;

type UserRole = 'user' | 'system-admin' | 'organization-admin' | 'super-admin';
interface RoleBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    role: UserRole;
    size?: 16 | 32;
}
declare const RoleBadge: react.ForwardRefExoticComponent<RoleBadgeProps & react.RefAttributes<HTMLSpanElement>>;
interface RoleBadgeCellProps extends HTMLAttributes<HTMLSpanElement> {
    role: UserRole;
    showRoleName?: boolean;
}
declare const RoleBadgeCell: react.ForwardRefExoticComponent<RoleBadgeCellProps & react.RefAttributes<HTMLSpanElement>>;

type SelectSize = 'sm' | 'md';
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children' | 'size'> {
    children: ReactNode;
    counter?: ReactNode;
    errorMessage?: ReactNode;
    helpText?: ReactNode;
    label: ReactNode;
    leadingIcon?: ReactNode | false;
    size?: SelectSize;
}

declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

type StatusBadgeStatus = 'active' | 'inactive' | 'pending' | 'suspended' | 'expired';
interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children?: ReactNode;
    status: StatusBadgeStatus;
}
declare const StatusBadge: react.ForwardRefExoticComponent<StatusBadgeProps & react.RefAttributes<HTMLSpanElement>>;

type SwitchSize = 'sm' | 'md';
interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'role' | 'size' | 'type'> {
    indeterminate?: boolean;
    label: ReactNode;
    size?: SwitchSize;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLInputElement>>;

type CommonSidebarItemProps = {
    active?: boolean;
    badge?: ReactNode;
    collapsed?: boolean;
    icon?: ReactNode;
    label: string;
    trailingIcon?: ReactNode;
};
type SidebarItemAnchorProps = CommonSidebarItemProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};
type SidebarItemButtonProps = CommonSidebarItemProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
};
type SidebarItemProps = SidebarItemAnchorProps | SidebarItemButtonProps;
declare const SidebarItem: react.ForwardRefExoticComponent<SidebarItemProps & react.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
interface SidebarProps extends HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
    collapseLabel?: string;
    expandLabel?: string;
    footer?: ReactNode;
    header?: ReactNode;
    navigationLabel?: string;
    onCollapsedChange?: (collapsed: boolean) => void;
    pinned?: boolean;
}
declare const Sidebar: react.ForwardRefExoticComponent<SidebarProps & react.RefAttributes<HTMLElement>>;

interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    actionLabel?: string;
    description?: ReactNode;
    dismissLabel?: string;
    error?: boolean;
    leading?: ReactNode;
    onAction?: () => void;
    onDismiss?: () => void;
    title: ReactNode;
}
declare const Toast: react.ForwardRefExoticComponent<ToastProps & react.RefAttributes<HTMLDivElement>>;
interface SnackbarProps extends Omit<ToastProps, 'leading'> {
    icon?: ReactNode;
}
declare const Snackbar: react.ForwardRefExoticComponent<SnackbarProps & react.RefAttributes<HTMLDivElement>>;
interface ToastViewportProps extends HTMLAttributes<HTMLDivElement> {
    expanded?: boolean;
    label?: string;
}
declare const ToastViewport: react.ForwardRefExoticComponent<ToastViewportProps & react.RefAttributes<HTMLDivElement>>;

interface TabItem {
    disabled?: boolean;
    id: string;
    label: ReactNode;
    panel: ReactNode;
}
interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    orientation?: 'horizontal' | 'vertical';
    stretch?: boolean;
    tabs: TabItem[];
    type?: 'default' | 'line';
    value?: string;
}
declare const Tabs: react.ForwardRefExoticComponent<TabsProps & react.RefAttributes<HTMLDivElement>>;

interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
    counter?: boolean;
    errorMessage?: ReactNode;
    helpText?: ReactNode;
    label: ReactNode;
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface TimePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    defaultValue?: string;
    disabled?: boolean;
    end?: string;
    label: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    start?: string;
    step?: number;
    value?: string;
}
declare const TimePicker: react.ForwardRefExoticComponent<TimePickerProps & react.RefAttributes<HTMLDivElement>>;

interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
    children: ReactElement;
    content: ReactNode;
    placement?: 'top' | 'right' | 'bottom' | 'left';
}
declare const Tooltip: react.ForwardRefExoticComponent<TooltipProps & react.RefAttributes<HTMLSpanElement>>;

interface TopNavigationProps extends HTMLAttributes<HTMLElement> {
    account?: ReactNode;
    actions?: ReactNode;
    brand: ReactNode;
    navigation?: ReactNode;
    navigationLabel?: string;
}
declare const TopNavigation: react.ForwardRefExoticComponent<TopNavigationProps & react.RefAttributes<HTMLElement>>;

declare const mosaicReactPackage: "@mosaic-ds/react";

export { Accordion, type AccordionProps, Avatar, type AvatarProps, type AvatarShape, type AvatarSize, type AvatarStatus, Badge, type BadgeProps, type BadgeVariant, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, Button, ButtonGroup, type ButtonGroupOrientation, type ButtonGroupProps, type ButtonProps, type ButtonSize, type ButtonVariant, Calendar, type CalendarPreset, type CalendarProps, Checkbox, type CheckboxProps, CloseButton, type CloseButtonProps, DashboardToggle, type DashboardToggleOption, type DashboardToggleProps, DatePicker, type DatePickerProps, type DateRange, Dialog, DialogFooter, type DialogFooterProps, DialogHeader, type DialogHeaderProps, type DialogProps, Divider, type DividerOrientation, type DividerProps, type DividerSize, type DividerVariant, FileUploader, type FileUploaderProps, IconButton, type IconButtonProps, type IconButtonSize, Input, type InputProps, type InputType, Pagination, type PaginationProps, Progress, type ProgressProps, type ProgressSize, Radio, type RadioProps, RoleBadge, RoleBadgeCell, type RoleBadgeCellProps, type RoleBadgeProps, SearchField, type SearchFieldProps, Select, type SelectProps, type SelectSize, Sidebar, SidebarItem, type SidebarItemProps, type SidebarProps, Snackbar, type SnackbarProps, StatusBadge, type StatusBadgeProps, type StatusBadgeStatus, Switch, type SwitchProps, type SwitchSize, type TabItem, Tabs, type TabsProps, Textarea, type TextareaProps, TimePicker, type TimePickerProps, Toast, type ToastProps, ToastViewport, type ToastViewportProps, Tooltip, type TooltipProps, TopNavigation, type TopNavigationProps, type UserRole, mosaicReactPackage };
