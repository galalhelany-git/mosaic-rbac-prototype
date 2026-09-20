# Components

Mosaic components are framework-neutral React primitives. Import them from the package root and load `@mosaic-ds/react/styles.css` once in the application.

## Available APIs

| Category     | Components                                                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Actions      | `Button`, `IconButton`, `CloseButton`, `ButtonGroup`                                                                                |
| Forms        | `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Textarea`, `SearchField`, `Calendar`, `DatePicker`, `TimePicker`, `FileUploader` |
| Navigation   | `Breadcrumb`, `Tabs`, `Pagination`, `DashboardToggle`, `TopNavigation`, `Sidebar`, `SidebarItem`                                    |
| Feedback     | `Badge`, `StatusBadge`, `Progress`, `Tooltip`, `Toast`, `Snackbar`, `ToastViewport`                                                 |
| Containers   | `Divider`, `Accordion`, `Dialog`, `DialogHeader`, `DialogFooter`                                                                    |
| Data display | `Avatar`, `RoleBadge`, `RoleBadgeCell`                                                                                              |

Each component folder contains the implementation, styles, Storybook stories, and package export. Shared Phase 4 and Phase 5 tests exercise native-control behavior, composite keyboard contracts, RTL arrow-key behavior, and representative automated accessibility checks.

## Usage rules

- Prefer native semantics and pass native props such as `name`, `required`, `disabled`, and event handlers through the component API.
- Icon-only actions require an accessible label.
- `Checkbox`, `Radio`, `Switch`, and `Textarea` require visible labels.
- `SearchField` requires an accessible label; add a visible external label when surrounding context is insufficient.
- `Progress` requires an accessible label and clamps values to its `0..max` range.
- Use logical CSS properties and verify new stories with the Storybook direction toolbar.
- Localize built-in control labels such as pagination, sidebar expand/collapse, calendar navigation, toast dismissal, and picker labels.
- Do not rely on color alone to convey state. Preserve text, icons, `aria-invalid`, `aria-current`, `aria-selected`, or `aria-checked` semantics as applicable.
- Respect user font scaling, reduced-motion, high-contrast/forced-color, keyboard, and screen-reader settings.
- Treat responsive layout as the application container's responsibility where Figma has not approved component breakpoints. Mosaic components use intrinsic sizing, wrapping, and overflow instead of guessing thresholds.
