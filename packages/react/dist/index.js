import { forwardRef, useState, useId, Children, isValidElement, cloneElement, useRef, useMemo, useEffect } from 'react';
import clsx14 from 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

// src/components/Accordion/Accordion.tsx
function ChevronIcon({
  direction = "down",
  ...props
}) {
  const rotation = { down: 0, left: 90, right: -90, up: 180 }[direction];
  return /* @__PURE__ */ jsx("svg", { ...props, "aria-hidden": "true", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "m6 9 6 6 6-6",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      transform: `rotate(${rotation} 12 12)`
    }
  ) });
}
function CloseIcon(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, "aria-hidden": "true", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "m6 6 12 12M18 6 6 18", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "2" }) });
}
function CalendarIcon(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, "aria-hidden": "true", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }
  ) });
}
function UploadIcon(props) {
  return /* @__PURE__ */ jsx("svg", { ...props, "aria-hidden": "true", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 15v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }
  ) });
}
function MoreIcon(props) {
  return /* @__PURE__ */ jsxs("svg", { ...props, "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ jsx("circle", { cx: "5", cy: "12", r: "1.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "1.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "19", cy: "12", r: "1.5" })
  ] });
}
var Accordion = forwardRef(function Accordion2({
  children,
  className,
  defaultOpen = false,
  disabled = false,
  headingLevel = 3,
  onOpenChange,
  open,
  title,
  ...props
}, ref) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open ?? internalOpen;
  const panelId = useId();
  const Heading = `h${headingLevel}`;
  const toggle = () => {
    const next = !isOpen;
    if (open === void 0) setInternalOpen(next);
    onOpenChange?.(next);
  };
  return /* @__PURE__ */ jsxs("div", { ...props, className: clsx14("mosaic-accordion", className), ref, children: [
    /* @__PURE__ */ jsx(Heading, { className: "mosaic-accordion__heading", children: /* @__PURE__ */ jsxs(
      "button",
      {
        "aria-controls": panelId,
        "aria-expanded": isOpen,
        className: "mosaic-accordion__trigger",
        disabled,
        onClick: toggle,
        type: "button",
        children: [
          /* @__PURE__ */ jsx("span", { children: title }),
          /* @__PURE__ */ jsx(ChevronIcon, { className: "mosaic-accordion__icon", direction: isOpen ? "up" : "down" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mosaic-accordion__panel", hidden: !isOpen, id: panelId, children })
  ] });
});
var getInitials = (name) => name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
var Avatar = forwardRef(function Avatar2({
  alt,
  className,
  disabled = false,
  initials,
  name,
  roleBadge,
  shape = "circle",
  size = "lg",
  src,
  status,
  ...props
}, ref) {
  const content = initials ?? getInitials(name);
  const accessibleName = `${alt ?? name}${status ? `, ${status}` : ""}`;
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ...props,
      "aria-label": accessibleName,
      className: clsx14(
        "mosaic-avatar",
        `mosaic-avatar--${size}`,
        `mosaic-avatar--${shape}`,
        disabled && "mosaic-avatar--disabled",
        className
      ),
      ref,
      role: "img",
      children: [
        src ? /* @__PURE__ */ jsx("img", { alt: "", className: "mosaic-avatar__image", src }) : /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-avatar__initials", children: content }),
        status ? /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: clsx14("mosaic-avatar__status", `mosaic-avatar__status--${status}`)
          }
        ) : null,
        roleBadge ? /* @__PURE__ */ jsx("span", { className: "mosaic-avatar__role", children: roleBadge }) : null
      ]
    }
  );
});
var Badge = forwardRef(function Badge2({ children, className, rounded = true, variant = "default", ...props }, ref) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      ...props,
      className: clsx14(
        "mosaic-badge",
        `mosaic-badge--${variant}`,
        rounded && "mosaic-badge--rounded",
        className
      ),
      ref,
      children
    }
  );
});

// src/assets/loading-dot-dark.svg
var loading_dot_dark_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="rec 3">%0A<path id="shape-circle" fill-rule="evenodd" clip-rule="evenodd" d="M4 6.66667C2.52724 6.66667 1.33333 5.47276 1.33333 4C1.33333 2.52724 2.52724 1.33333 4 1.33333C5.47276 1.33333 6.66667 2.52724 6.66667 4C6.66667 5.47276 5.47276 6.66667 4 6.66667Z" fill="url(%23paint0_linear_0_373)"/>%0A</g>%0A<defs>%0A<linearGradient id="paint0_linear_0_373" x1="6.66667" y1="1.33333" x2="6.66667" y2="6.66667" gradientUnits="userSpaceOnUse">%0A<stop stop-color="%231E3A8A"/>%0A<stop offset="1" stop-color="%231471DA"/>%0A</linearGradient>%0A</defs>%0A</svg>%0A';

// src/assets/loading-dot.svg
var loading_dot_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="rec 3">%0A<path id="shape-circle" fill-rule="evenodd" clip-rule="evenodd" d="M4 6.66667C2.52724 6.66667 1.33333 5.47276 1.33333 4C1.33333 2.52724 2.52724 1.33333 4 1.33333C5.47276 1.33333 6.66667 2.52724 6.66667 4C6.66667 5.47276 5.47276 6.66667 4 6.66667Z" fill="url(%23paint0_linear_0_367)"/>%0A</g>%0A<defs>%0A<linearGradient id="paint0_linear_0_367" x1="6.66667" y1="1.33333" x2="6.66667" y2="6.66667" gradientUnits="userSpaceOnUse">%0A<stop stop-color="%23ECE9E6"/>%0A<stop offset="1" stop-color="white"/>%0A</linearGradient>%0A</defs>%0A</svg>%0A';

// src/assets/loading-ring-dark.svg
var loading_ring_dark_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="shape-circle">%0A<path id="shape-circle_2" fill-rule="evenodd" clip-rule="evenodd" d="M8 11.3333C6.15905 11.3333 4.66667 9.84095 4.66667 8C4.66667 6.15905 6.15905 4.66667 8 4.66667C9.84095 4.66667 11.3333 6.15905 11.3333 8C11.3333 9.84095 9.84095 11.3333 8 11.3333ZM8 13.3333C5.05448 13.3333 2.66667 10.9455 2.66667 8C2.66667 5.05448 5.05448 2.66667 8 2.66667C10.9455 2.66667 13.3333 5.05448 13.3333 8C13.3333 10.9455 10.9455 13.3333 8 13.3333Z" fill="url(%23paint0_linear_0_361)"/>%0A</g>%0A<defs>%0A<linearGradient id="paint0_linear_0_361" x1="13.3333" y1="2.66667" x2="13.3333" y2="13.3333" gradientUnits="userSpaceOnUse">%0A<stop stop-color="%231E3A8A"/>%0A<stop offset="1" stop-color="%231471DA"/>%0A</linearGradient>%0A</defs>%0A</svg>%0A';

// src/assets/loading-ring.svg
var loading_ring_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="shape-circle">%0A<path id="shape-circle_2" fill-rule="evenodd" clip-rule="evenodd" d="M8 11.3333C6.15905 11.3333 4.66667 9.84095 4.66667 8C4.66667 6.15905 6.15905 4.66667 8 4.66667C9.84095 4.66667 11.3333 6.15905 11.3333 8C11.3333 9.84095 9.84095 11.3333 8 11.3333ZM8 13.3333C5.05448 13.3333 2.66667 10.9455 2.66667 8C2.66667 5.05448 5.05448 2.66667 8 2.66667C10.9455 2.66667 13.3333 5.05448 13.3333 8C13.3333 10.9455 10.9455 13.3333 8 13.3333Z" fill="url(%23paint0_linear_0_375)"/>%0A</g>%0A<defs>%0A<linearGradient id="paint0_linear_0_375" x1="13.3333" y1="2.66667" x2="13.3333" y2="13.3333" gradientUnits="userSpaceOnUse">%0A<stop stop-color="%23ECE9E6"/>%0A<stop offset="1" stop-color="white"/>%0A</linearGradient>%0A</defs>%0A</svg>%0A';
var Button = forwardRef(function Button2({
  children,
  className,
  disabled = false,
  leadingIcon,
  loading = false,
  size = "lg",
  trailingIcon,
  type = "button",
  variant = "primary",
  ...props
}, ref) {
  const isDisabled = disabled || loading;
  const loadingDot = variant === "ghost" ? loading_dot_dark_default : loading_dot_default;
  const loadingRing = variant === "ghost" ? loading_ring_dark_default : loading_ring_default;
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      "aria-busy": loading || void 0,
      className: clsx14(
        "mosaic-button",
        `mosaic-button--${variant}`,
        `mosaic-button--${size}`,
        className
      ),
      "data-loading": loading || void 0,
      disabled: isDisabled,
      ref,
      type,
      children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("span", { "aria-hidden": "true", className: "mosaic-button__loading", children: [
          /* @__PURE__ */ jsx("img", { alt: "", src: loadingDot }),
          /* @__PURE__ */ jsx("img", { alt: "", src: loadingRing }),
          /* @__PURE__ */ jsx("img", { alt: "", src: loadingDot })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "mosaic-visually-hidden", children })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        leadingIcon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-button__icon", children: leadingIcon }) : null,
        /* @__PURE__ */ jsx("span", { className: "mosaic-button__label", children }),
        trailingIcon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-button__icon", children: trailingIcon }) : null
      ] })
    }
  );
});
var ButtonGroup = forwardRef(function ButtonGroup2({ children, className, label, orientation = "horizontal", ...props }, ref) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      "aria-label": label,
      className: clsx14("mosaic-button-group", `mosaic-button-group--${orientation}`, className),
      ref,
      role: "group",
      children: Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child, {
          className: clsx14(child.props.className, "mosaic-button-group__item")
        });
      })
    }
  );
});
var Breadcrumb = forwardRef(function Breadcrumb2({ className, items, label = "Breadcrumb", maxItems = 5, moreLabel = "More pages", ...props }, ref) {
  const collapse = items.length > maxItems;
  const visible = collapse ? [items[0], null, ...items.slice(-(maxItems - 2))] : items;
  return /* @__PURE__ */ jsx("nav", { ...props, "aria-label": label, className: clsx14("mosaic-breadcrumb", className), ref, children: /* @__PURE__ */ jsx("ol", { className: "mosaic-breadcrumb__list", children: visible.map((item, index) => {
    const current = index === visible.length - 1;
    return /* @__PURE__ */ jsxs(
      "li",
      {
        className: "mosaic-breadcrumb__item",
        children: [
          index > 0 ? /* @__PURE__ */ jsx(ChevronIcon, { className: "mosaic-breadcrumb__separator", direction: "right" }) : null,
          item ? current || !item.href ? /* @__PURE__ */ jsx(
            "span",
            {
              "aria-current": current ? "page" : void 0,
              className: clsx14(current && "mosaic-breadcrumb__current"),
              children: item.label
            }
          ) : /* @__PURE__ */ jsx("a", { href: item.href, onClick: item.onClick, children: item.label }) : /* @__PURE__ */ jsx("span", { "aria-label": moreLabel, className: "mosaic-breadcrumb__ellipsis", role: "img", children: /* @__PURE__ */ jsx(MoreIcon, {}) })
        ]
      },
      item ? `${String(item.label)}-${index}` : "ellipsis"
    );
  }) }) });
});
var sameDay = (a, b) => Boolean(
  a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
);
var startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
var addDays = (date, days) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
var addMonths = (date, months) => {
  const target = new Date(date.getFullYear(), date.getMonth() + months + 1, 0).getDate();
  return new Date(date.getFullYear(), date.getMonth() + months, Math.min(date.getDate(), target));
};
var Calendar = forwardRef(function Calendar2({
  className,
  disabledDate,
  locale,
  mode = "single",
  month,
  nextMonthLabel = "Next month",
  onChange,
  onMonthChange,
  presetsLabel = "Date presets",
  presets,
  previousMonthLabel = "Previous month",
  value,
  weekStartsOn = 0,
  ...props
}, ref) {
  const initial = value instanceof Date ? value : value?.start;
  const calendarId = useId();
  const [internalMonth, setInternalMonth] = useState(
    () => startOfDay(month ?? initial ?? /* @__PURE__ */ new Date())
  );
  const [focusDate, setFocusDate] = useState(() => startOfDay(initial ?? /* @__PURE__ */ new Date()));
  const moveFocusRef = useRef(false);
  const visibleMonth = month ?? internalMonth;
  const range2 = value instanceof Date ? void 0 : value;
  const selected = value instanceof Date ? value : void 0;
  const first = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const offset = (first.getDay() - weekStartsOn + 7) % 7;
  const gridStart = addDays(first, -offset);
  const days = useMemo(
    () => Array.from({ length: 42 }, (_, index) => addDays(gridStart, index)),
    [gridStart.getTime()]
  );
  const weekdays = useMemo(
    () => Array.from(
      { length: 7 },
      (_, index) => new Intl.DateTimeFormat(locale, { weekday: "short" }).format(addDays(new Date(2024, 0, weekStartsOn), index)).slice(0, 2)
    ),
    [locale, weekStartsOn]
  );
  const changeMonth = (delta) => {
    const next = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + delta, 1);
    if (month === void 0) setInternalMonth(next);
    onMonthChange?.(next);
  };
  const showMonthFor = (date) => {
    if (date.getFullYear() === visibleMonth.getFullYear() && date.getMonth() === visibleMonth.getMonth())
      return;
    const next = new Date(date.getFullYear(), date.getMonth(), 1);
    if (month === void 0) setInternalMonth(next);
    onMonthChange?.(next);
  };
  const focusDay = (date) => {
    let next = startOfDay(date);
    for (let index = 0; index < 42 && disabledDate?.(next); index += 1) next = addDays(next, 1);
    moveFocusRef.current = true;
    setFocusDate(next);
    showMonthFor(next);
  };
  useEffect(() => {
    if (!moveFocusRef.current) return;
    moveFocusRef.current = false;
    document.getElementById(`${calendarId}-${focusDate.toISOString().slice(0, 10)}`)?.focus();
  }, [calendarId, focusDate, visibleMonth]);
  const handleDayKeyDown = (event, date) => {
    const direction = event.currentTarget.closest("[dir]")?.getAttribute("dir");
    const horizontalStep = direction === "rtl" ? -1 : 1;
    let next;
    if (event.key === "ArrowRight") next = addDays(date, horizontalStep);
    if (event.key === "ArrowLeft") next = addDays(date, -horizontalStep);
    if (event.key === "ArrowDown") next = addDays(date, 7);
    if (event.key === "ArrowUp") next = addDays(date, -7);
    if (event.key === "Home") next = addDays(date, -((date.getDay() - weekStartsOn + 7) % 7));
    if (event.key === "End") next = addDays(date, 6 - (date.getDay() - weekStartsOn + 7) % 7);
    if (event.key === "PageUp") next = addMonths(date, -1);
    if (event.key === "PageDown") next = addMonths(date, 1);
    if (!next) return;
    event.preventDefault();
    focusDay(next);
  };
  const choose = (date) => {
    if (disabledDate?.(date)) return;
    if (mode === "single") return onChange?.(date);
    if (!range2?.start || range2.end) return onChange?.({ start: date });
    if (date < range2.start) return onChange?.({ start: date, end: range2.start });
    onChange?.({ start: range2.start, end: date });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      className: clsx14("mosaic-calendar", presets?.length && "mosaic-calendar--presets", className),
      ref,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mosaic-calendar__main", children: [
          /* @__PURE__ */ jsxs("div", { className: "mosaic-calendar__header", children: [
            /* @__PURE__ */ jsx("button", { "aria-label": previousMonthLabel, onClick: () => changeMonth(-1), type: "button", children: /* @__PURE__ */ jsx(ChevronIcon, { direction: "left" }) }),
            /* @__PURE__ */ jsx("strong", { "aria-live": "polite", id: `${calendarId}-month`, children: new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(
              visibleMonth
            ) }),
            /* @__PURE__ */ jsx("button", { "aria-label": nextMonthLabel, onClick: () => changeMonth(1), type: "button", children: /* @__PURE__ */ jsx(ChevronIcon, { direction: "right" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "mosaic-calendar__weekdays", children: weekdays.map((day, index) => /* @__PURE__ */ jsx("span", { children: day }, `${day}-${index}`)) }),
          /* @__PURE__ */ jsx("div", { "aria-labelledby": `${calendarId}-month`, className: "mosaic-calendar__grid", role: "grid", children: Array.from({ length: 6 }, (_, week) => /* @__PURE__ */ jsx("div", { className: "mosaic-calendar__week", role: "row", children: days.slice(week * 7, week * 7 + 7).map((date) => {
            const inMonth = date.getMonth() === visibleMonth.getMonth();
            const isStart = sameDay(date, range2?.start);
            const isEnd = sameDay(date, range2?.end);
            const inRange = Boolean(
              range2?.start && range2.end && date > range2.start && date < range2.end
            );
            const active = sameDay(date, selected) || isStart || isEnd;
            const disabled = Boolean(disabledDate?.(date));
            return /* @__PURE__ */ jsx(
              "button",
              {
                "aria-label": new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(date),
                "aria-selected": active || inRange,
                className: clsx14(
                  "mosaic-calendar__day",
                  !inMonth && "mosaic-calendar__day--outside",
                  inRange && "mosaic-calendar__day--range",
                  active && "mosaic-calendar__day--selected"
                ),
                disabled,
                id: `${calendarId}-${date.toISOString().slice(0, 10)}`,
                onClick: () => choose(date),
                onFocus: () => setFocusDate(date),
                onKeyDown: (event) => handleDayKeyDown(event, date),
                role: "gridcell",
                tabIndex: sameDay(date, focusDate) ? 0 : -1,
                type: "button",
                children: date.getDate()
              },
              date.toISOString()
            );
          }) }, week)) })
        ] }),
        presets?.length ? /* @__PURE__ */ jsx("div", { "aria-label": presetsLabel, className: "mosaic-calendar__presets", role: "group", children: presets.map((preset) => /* @__PURE__ */ jsx("button", { onClick: () => onChange?.(preset.value), type: "button", children: preset.label }, preset.label)) }) : null
      ]
    }
  );
});

// src/assets/checkbox-check.svg
var checkbox_check_default = 'data:image/svg+xml,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">%0A  <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="%23E9EBF3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>%0A</svg>%0A';

// src/assets/checkbox-minus.svg
var checkbox_minus_default = 'data:image/svg+xml,<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">%0A  <path d="M2.91667 7H11.0833" stroke="%23E9EBF3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>%0A</svg>%0A';
var Checkbox = forwardRef(function Checkbox2({ className, disabled = false, id, indeterminate = false, label, ...props }, forwardedRef) {
  const generatedId = useId();
  const inputRef = useRef(null);
  const inputId = id ?? `mosaic-checkbox-${generatedId}`;
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const setRef = (node) => {
    inputRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: clsx14("mosaic-choice", disabled && "mosaic-choice--disabled", className),
      htmlFor: inputId,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ...props,
            className: "mosaic-choice__input",
            disabled,
            id: inputId,
            ref: setRef,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ jsxs(
          "span",
          {
            "aria-hidden": "true",
            className: "mosaic-choice__box",
            "data-indeterminate": indeterminate || void 0,
            children: [
              /* @__PURE__ */ jsx("img", { alt: "", className: "mosaic-choice__check", src: checkbox_check_default }),
              /* @__PURE__ */ jsx("img", { alt: "", className: "mosaic-choice__minus", src: checkbox_minus_default })
            ]
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "mosaic-choice__label", children: label })
      ]
    }
  );
});
var CloseButton = forwardRef(function CloseButton2({
  "aria-label": ariaLabel = "Close",
  className,
  selected = false,
  size = "lg",
  type = "button",
  ...props
}, ref) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      "aria-label": ariaLabel,
      "aria-pressed": selected || void 0,
      className: clsx14("mosaic-close-button", `mosaic-close-button--${size}`, className),
      ref,
      type,
      children: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "m6 6 12 12M18 6 6 18",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeWidth: "2"
        }
      ) })
    }
  );
});
function Divider({
  className,
  label,
  orientation = "horizontal",
  size = "md",
  variant = "solid",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      "aria-orientation": orientation,
      className: clsx14(
        "mosaic-divider",
        `mosaic-divider--${orientation}`,
        `mosaic-divider--${size}`,
        `mosaic-divider--${variant}`,
        label && "mosaic-divider--labelled",
        className
      ),
      role: "separator",
      children: label ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "mosaic-divider__line" }),
        /* @__PURE__ */ jsx("span", { className: "mosaic-divider__label", children: label }),
        /* @__PURE__ */ jsx("span", { className: "mosaic-divider__line" })
      ] }) : null
    }
  );
}
var IconButton = forwardRef(function IconButton2({
  "aria-label": ariaLabel,
  className,
  disabled = false,
  icon,
  loading = false,
  notification,
  size = "lg",
  type = "button",
  ...props
}, ref) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ...props,
      "aria-busy": loading || void 0,
      "aria-label": ariaLabel,
      className: clsx14("mosaic-icon-button", `mosaic-icon-button--${size}`, className),
      "data-loading": loading || void 0,
      disabled: disabled || loading,
      ref,
      type,
      children: [
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-icon-button__icon", children: loading ? /* @__PURE__ */ jsx("span", { className: "mosaic-icon-button__spinner" }) : icon }),
        notification !== void 0 ? /* @__PURE__ */ jsx("span", { className: "mosaic-icon-button__notification", children: notification }) : null
      ]
    }
  );
});
var DashboardToggle = forwardRef(
  function DashboardToggle2({ className, defaultValue, label = "Dashboard view", onValueChange, options, value, ...props }, ref) {
    const [internalValue, setInternalValue] = useState(defaultValue ?? options[0]?.value ?? "");
    const selected = value ?? internalValue;
    const select = (next) => {
      if (value === void 0) setInternalValue(next);
      onValueChange?.(next);
    };
    const handleKeyDown = (event, index) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key))
        return;
      event.preventDefault();
      const direction = event.currentTarget.closest("[dir]")?.getAttribute("dir");
      const previous = ["ArrowLeft", "ArrowUp"].includes(event.key);
      const offset = direction === "rtl" && ["ArrowLeft", "ArrowRight"].includes(event.key) ? previous ? 1 : -1 : previous ? -1 : 1;
      const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : (index + offset + options.length) % options.length;
      const next = options[nextIndex];
      if (!next) return;
      select(next.value);
      const group = event.currentTarget.closest('[role="radiogroup"]');
      group?.querySelectorAll('[role="radio"]')[nextIndex]?.focus();
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ...props,
        "aria-label": label,
        className: clsx14("mosaic-dashboard-toggle", className),
        ref,
        role: "radiogroup",
        children: options.map((option) => /* @__PURE__ */ jsxs(
          "button",
          {
            "aria-checked": selected === option.value,
            className: "mosaic-dashboard-toggle__option",
            onClick: () => select(option.value),
            onKeyDown: (event) => handleKeyDown(event, options.indexOf(option)),
            role: "radio",
            tabIndex: selected === option.value ? 0 : -1,
            type: "button",
            children: [
              option.icon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-dashboard-toggle__icon", children: option.icon }) : null,
              /* @__PURE__ */ jsx("span", { children: option.label })
            ]
          },
          option.value
        ))
      }
    );
  }
);
function formatValue(value, locale) {
  const formatter = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  if (value instanceof Date) return formatter.format(value);
  if (value?.start && value.end)
    return `${formatter.format(value.start)} \u2013 ${formatter.format(value.end)}`;
  if (value?.start) return `${formatter.format(value.start)} \u2013 \u2026`;
  return "";
}
var DatePicker = forwardRef(function DatePicker2({
  className,
  defaultValue,
  disabled = false,
  label,
  locale,
  mode = "single",
  onValueChange,
  placeholder = "Select date",
  presets,
  value,
  ...props
}, ref) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);
  const wasOpenRef = useRef(false);
  const pickerId = useId();
  const selected = value ?? internalValue;
  const displayValue = formatValue(selected, locale) || placeholder;
  const choose = (next) => {
    if (value === void 0) setInternalValue(next);
    onValueChange?.(next);
    if (mode === "single" || !(next instanceof Date) && next.end) setOpen(false);
  };
  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      setOpen(false);
    }
  };
  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      popoverRef.current?.querySelector('[role="gridcell"][tabindex="0"]')?.focus();
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      className: clsx14("mosaic-date-picker", className),
      onKeyDown,
      ref,
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            "aria-controls": pickerId,
            "aria-expanded": open,
            "aria-haspopup": "dialog",
            "aria-label": `${label}: ${displayValue}`,
            className: "mosaic-date-picker__trigger",
            disabled,
            onClick: () => setOpen((current) => !current),
            ref: triggerRef,
            type: "button",
            children: [
              /* @__PURE__ */ jsx("span", { className: clsx14(!selected && "mosaic-date-picker__placeholder"), children: displayValue }),
              /* @__PURE__ */ jsx(CalendarIcon, {})
            ]
          }
        ),
        open ? /* @__PURE__ */ jsx(
          "div",
          {
            "aria-label": label,
            className: "mosaic-date-picker__popover",
            id: pickerId,
            ref: popoverRef,
            role: "dialog",
            children: /* @__PURE__ */ jsx(
              Calendar,
              {
                locale,
                mode,
                onChange: choose,
                presets,
                value: selected
              }
            )
          }
        ) : null
      ]
    }
  );
});
var DialogHeader = forwardRef(function DialogHeader2({ align = "start", className, description, padding = 24, size = "lg", title, titleId, ...props }, ref) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      className: clsx14(
        "mosaic-dialog__header",
        `mosaic-dialog__header--${align}`,
        `mosaic-dialog__header--${size}`,
        className
      ),
      ref,
      style: { padding },
      children: [
        /* @__PURE__ */ jsx("div", { className: "mosaic-dialog__title", id: titleId, children: title }),
        description ? /* @__PURE__ */ jsx("div", { className: "mosaic-dialog__description", children: description }) : null
      ]
    }
  );
});
var DialogFooter = forwardRef(function DialogFooter2({ align = "end", children, className, fullWidth = false, padding = 24, ...props }, ref) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: clsx14(
        "mosaic-dialog__footer",
        `mosaic-dialog__footer--${align}`,
        fullWidth && "mosaic-dialog__footer--full",
        className
      ),
      ref,
      style: { padding },
      children
    }
  );
});
var Dialog = forwardRef(function Dialog2({
  children,
  className,
  closeLabel = "Close dialog",
  description,
  footer,
  onCancel,
  onOpenChange,
  open,
  showCloseButton = true,
  size = "default",
  title,
  ...props
}, forwardedRef) {
  const localRef = useRef(null);
  const titleId = useId();
  const setRef = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };
  useEffect(() => {
    const dialog = localRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    } else if (!open && dialog.open) {
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    }
  }, [open]);
  return /* @__PURE__ */ jsxs(
    "dialog",
    {
      ...props,
      "aria-labelledby": titleId,
      className: clsx14("mosaic-dialog", `mosaic-dialog--${size}`, className),
      onCancel: (event) => {
        onCancel?.(event);
        if (!event.defaultPrevented) onOpenChange?.(false);
      },
      ref: setRef,
      children: [
        showCloseButton ? /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": closeLabel,
            className: "mosaic-dialog__close",
            onClick: () => onOpenChange?.(false),
            type: "button",
            children: /* @__PURE__ */ jsx(CloseIcon, {})
          }
        ) : null,
        /* @__PURE__ */ jsx(DialogHeader, { description, padding: 24, title, titleId }),
        /* @__PURE__ */ jsx("div", { className: "mosaic-dialog__body", children }),
        footer ? /* @__PURE__ */ jsx(DialogFooter, { children: footer }) : null
      ]
    }
  );
});
function Progress({
  "aria-label": ariaLabel,
  className,
  max = 100,
  size = "md",
  value,
  ...props
}) {
  const safeMax = max > 0 ? max : 100;
  const safeValue = Math.min(Math.max(value, 0), safeMax);
  const percentage = safeValue / safeMax * 100;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      "aria-label": ariaLabel,
      "aria-valuemax": safeMax,
      "aria-valuemin": 0,
      "aria-valuenow": safeValue,
      className: clsx14("mosaic-progress", `mosaic-progress--${size}`, className),
      role: "progressbar",
      children: /* @__PURE__ */ jsx("span", { className: "mosaic-progress__value", style: { inlineSize: `${percentage}%` } })
    }
  );
}
var FileUploader = forwardRef(function FileUploader2({
  accept,
  className,
  description = "Drag and drop files here, or browse",
  disabled = false,
  label = "Upload files",
  multiple = false,
  onFiles,
  progress = 0,
  uploading = false,
  variant = "base",
  ...props
}, forwardedRef) {
  const localRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const id = useId();
  const setRef = (node) => {
    localRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };
  const deliver = (list) => {
    if (list?.length) onFiles?.(Array.from(list));
  };
  const drop = (event) => {
    event.preventDefault();
    setDragging(false);
    if (!disabled && !uploading) deliver(event.dataTransfer.files);
  };
  const keyboard = (event) => {
    if ((event.key === "Enter" || event.key === " ") && !disabled && !uploading) {
      event.preventDefault();
      localRef.current?.click();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: clsx14("mosaic-file-uploader-wrap", className), children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ...props,
        accept,
        className: "mosaic-visually-hidden",
        disabled: disabled || uploading,
        id,
        multiple,
        onChange: (event) => deliver(event.currentTarget.files),
        ref: setRef,
        type: "file"
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        "aria-controls": id,
        "aria-disabled": disabled || uploading,
        className: clsx14(
          "mosaic-file-uploader",
          `mosaic-file-uploader--${variant}`,
          dragging && "mosaic-file-uploader--dragging"
        ),
        onClick: () => !disabled && !uploading && localRef.current?.click(),
        onDragEnter: (event) => {
          event.preventDefault();
          if (!disabled && !uploading) setDragging(true);
        },
        onDragLeave: (event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setDragging(false);
        },
        onDragOver: (event) => event.preventDefault(),
        onDrop: drop,
        onKeyDown: keyboard,
        role: "button",
        tabIndex: disabled || uploading ? -1 : 0,
        children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-file-uploader__icon", children: /* @__PURE__ */ jsx(UploadIcon, {}) }),
          /* @__PURE__ */ jsxs("span", { className: "mosaic-file-uploader__content", children: [
            /* @__PURE__ */ jsx("strong", { children: label }),
            /* @__PURE__ */ jsx("span", { children: uploading ? "Uploading\u2026" : description })
          ] })
        ]
      }
    ),
    uploading ? /* @__PURE__ */ jsx(Progress, { "aria-label": "Upload progress", value: progress }) : null
  ] });
});
var getTextLength = (value, defaultValue) => {
  const currentValue = value ?? defaultValue;
  return typeof currentValue === "string" || typeof currentValue === "number" ? String(currentValue).length : 0;
};
var Input = forwardRef(function Input2({
  action,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  className,
  counter = false,
  defaultValue,
  disabled = false,
  errorMessage,
  helpText,
  horizontal = false,
  id,
  label,
  leadingIcon,
  maxLength,
  trailingIcon,
  type = "text",
  value,
  ...props
}, ref) {
  const generatedId = useId();
  const inputId = id ?? `mosaic-input-${generatedId}`;
  const helpId = helpText ? `${inputId}-help` : void 0;
  const errorId = errorMessage ? `${inputId}-error` : void 0;
  const describedBy = [ariaDescribedBy, helpId, errorId].filter(Boolean).join(" ") || void 0;
  const invalid = Boolean(errorMessage) || ariaInvalid === true || ariaInvalid === "true";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx14(
        "mosaic-field",
        horizontal && "mosaic-field--horizontal",
        disabled && "mosaic-field--disabled",
        invalid && "mosaic-field--invalid",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mosaic-field__label-row", children: [
          /* @__PURE__ */ jsx("label", { className: "mosaic-field__label", htmlFor: inputId, children: label }),
          counter && maxLength ? /* @__PURE__ */ jsxs("span", { "aria-live": "polite", className: "mosaic-field__counter", children: [
            getTextLength(value, defaultValue),
            "/",
            maxLength
          ] }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mosaic-field__control-column", children: [
          /* @__PURE__ */ jsxs("div", { className: "mosaic-field__control-row", children: [
            /* @__PURE__ */ jsxs("div", { className: "mosaic-input__field", children: [
              leadingIcon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-field__icon", children: leadingIcon }) : null,
              /* @__PURE__ */ jsx(
                "input",
                {
                  ...props,
                  "aria-describedby": describedBy,
                  "aria-invalid": invalid || void 0,
                  className: "mosaic-input__control",
                  defaultValue,
                  disabled,
                  id: inputId,
                  maxLength,
                  ref,
                  type,
                  value
                }
              ),
              trailingIcon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-field__icon", children: trailingIcon }) : null
            ] }),
            action ? /* @__PURE__ */ jsx("div", { className: "mosaic-field__action", children: action }) : null
          ] }),
          helpText ? /* @__PURE__ */ jsx("div", { className: "mosaic-field__help", id: helpId, children: helpText }) : null,
          errorMessage ? /* @__PURE__ */ jsx("div", { className: "mosaic-field__error", id: errorId, role: "alert", children: errorMessage }) : null
        ] })
      ]
    }
  );
});
function range(start, end) {
  return Array.from({ length: Math.max(0, end - start + 1) }, (_, index) => start + index);
}
function getPages(current, total, siblings) {
  if (total <= siblings * 2 + 5) return range(1, total);
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);
  return [
    1,
    ...left > 2 ? ["ellipsis-start"] : [],
    ...range(left, right),
    ...right < total - 1 ? ["ellipsis-end"] : [],
    total
  ];
}
var Pagination = forwardRef(function Pagination2({
  className,
  currentPage,
  label = "Pagination",
  nextAriaLabel = "Next page",
  nextLabel = "Next",
  onPageChange,
  pageLabel = (page) => `Page ${page}`,
  previousAriaLabel = "Previous page",
  previousLabel = "Previous",
  siblingCount = 1,
  totalPages,
  ...props
}, ref) {
  const safeTotal = Math.max(1, totalPages);
  const safeCurrent = Math.min(safeTotal, Math.max(1, currentPage));
  return /* @__PURE__ */ jsxs("nav", { ...props, "aria-label": label, className: clsx14("mosaic-pagination", className), ref, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": previousAriaLabel,
        className: "mosaic-pagination__button mosaic-pagination__button--direction",
        disabled: safeCurrent === 1,
        onClick: () => onPageChange(safeCurrent - 1),
        type: "button",
        children: previousLabel
      }
    ),
    getPages(safeCurrent, safeTotal, siblingCount).map(
      (page) => typeof page === "number" ? /* @__PURE__ */ jsx(
        "button",
        {
          "aria-current": page === safeCurrent ? "page" : void 0,
          "aria-label": pageLabel(page),
          className: "mosaic-pagination__button mosaic-pagination__button--page",
          onClick: () => onPageChange(page),
          type: "button",
          children: page
        },
        page
      ) : /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-pagination__ellipsis", children: /* @__PURE__ */ jsx(MoreIcon, {}) }, page)
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        "aria-label": nextAriaLabel,
        className: "mosaic-pagination__button mosaic-pagination__button--direction",
        disabled: safeCurrent === safeTotal,
        onClick: () => onPageChange(safeCurrent + 1),
        type: "button",
        children: nextLabel
      }
    )
  ] });
});
var Radio = forwardRef(function Radio2({ className, disabled = false, id, label, ...props }, ref) {
  const generatedId = useId();
  const inputId = id ?? `mosaic-radio-${generatedId}`;
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: clsx14("mosaic-radio", disabled && "mosaic-radio--disabled", className),
      htmlFor: inputId,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ...props,
            className: "mosaic-radio__input",
            disabled,
            id: inputId,
            ref,
            type: "radio"
          }
        ),
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-radio__mark" }),
        /* @__PURE__ */ jsx("span", { children: label })
      ]
    }
  );
});

// src/assets/search.svg
var search_default = 'data:image/svg+xml,<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">%0A  <path d="M12.5 12.5L8.5 8.5M0.5 5.16667C0.5 5.7795 0.620707 6.38634 0.855229 6.95252C1.08975 7.51871 1.43349 8.03316 1.86683 8.4665C2.30018 8.89984 2.81462 9.24358 3.38081 9.47811C3.947 9.71263 4.55383 9.83333 5.16667 9.83333C5.7795 9.83333 6.38634 9.71263 6.95252 9.47811C7.51871 9.24358 8.03316 8.89984 8.4665 8.4665C8.89984 8.03316 9.24358 7.51871 9.47811 6.95252C9.71263 6.38634 9.83333 5.7795 9.83333 5.16667C9.83333 4.55383 9.71263 3.947 9.47811 3.38081C9.24358 2.81462 8.89984 2.30018 8.4665 1.86683C8.03316 1.43349 7.51871 1.08975 6.95252 0.855229C6.38634 0.620707 5.7795 0.5 5.16667 0.5C4.55383 0.5 3.947 0.620707 3.38081 0.855229C2.81462 1.08975 2.30018 1.43349 1.86683 1.86683C1.43349 2.30018 1.08975 2.81462 0.855229 3.38081C0.620707 3.947 0.5 4.55383 0.5 5.16667Z" stroke="%2310B981" stroke-linecap="round" stroke-linejoin="round"/>%0A</svg>%0A';
var SearchField = forwardRef(function SearchField2({ className, disabled = false, ...props }, ref) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx14(
        "mosaic-search-field",
        disabled && "mosaic-search-field--disabled",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ...props,
            className: "mosaic-search-field__control",
            disabled,
            ref,
            type: "search"
          }
        ),
        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-search-field__icon", children: /* @__PURE__ */ jsx("img", { alt: "", src: search_default }) })
      ]
    }
  );
});

// src/assets/role-organization-admin.svg
var role_organization_admin_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 21V20C8 19.4696 8.21071 18.9609 8.58579 18.5858C8.96086 18.2107 9.46957 18 10 18H14C14.5304 18 15.0391 18.2107 15.4142 18.5858C15.7893 18.9609 16 19.4696 16 20V21M17 10H19C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12V13M3 13V12C3 11.4696 3.21071 10.9609 3.58579 10.5858C3.96086 10.2107 4.46957 10 5 10H7M10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13ZM15 5C15 5.53043 15.2107 6.03914 15.5858 6.41421C15.9609 6.78929 16.4696 7 17 7C17.5304 7 18.0391 6.78929 18.4142 6.41421C18.7893 6.03914 19 5.53043 19 5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3C16.4696 3 15.9609 3.21071 15.5858 3.58579C15.2107 3.96086 15 4.46957 15 5ZM5 5C5 5.53043 5.21071 6.03914 5.58579 6.41421C5.96086 6.78929 6.46957 7 7 7C7.53043 7 8.03914 6.78929 8.41421 6.41421C8.78929 6.03914 9 5.53043 9 5C9 4.46957 8.78929 3.96086 8.41421 3.58579C8.03914 3.21071 7.53043 3 7 3C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5Z" stroke="%2338BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>%0A';

// src/assets/role-organization-admin-small.svg
var role_organization_admin_small_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10.5V10C4 9.73478 4.10536 9.48043 4.29289 9.29289C4.48043 9.10536 4.73478 9 5 9H7C7.26522 9 7.51957 9.10536 7.70711 9.29289C7.89464 9.48043 8 9.73478 8 10V10.5M8.5 5H9.5C9.76522 5 10.0196 5.10536 10.2071 5.29289C10.3946 5.48043 10.5 5.73478 10.5 6V6.5M1.5 6.5V6C1.5 5.73478 1.60536 5.48043 1.79289 5.29289C1.98043 5.10536 2.23478 5 2.5 5H3.5M5 6.5C5 6.76522 5.10536 7.01957 5.29289 7.20711C5.48043 7.39464 5.73478 7.5 6 7.5C6.26522 7.5 6.51957 7.39464 6.70711 7.20711C6.89464 7.01957 7 6.76522 7 6.5C7 6.23478 6.89464 5.98043 6.70711 5.79289C6.51957 5.60536 6.26522 5.5 6 5.5C5.73478 5.5 5.48043 5.60536 5.29289 5.79289C5.10536 5.98043 5 6.23478 5 6.5ZM7.5 2.5C7.5 2.76522 7.60536 3.01957 7.79289 3.20711C7.98043 3.39464 8.23478 3.5 8.5 3.5C8.76522 3.5 9.01957 3.39464 9.20711 3.20711C9.39464 3.01957 9.5 2.76522 9.5 2.5C9.5 2.23478 9.39464 1.98043 9.20711 1.79289C9.01957 1.60536 8.76522 1.5 8.5 1.5C8.23478 1.5 7.98043 1.60536 7.79289 1.79289C7.60536 1.98043 7.5 2.23478 7.5 2.5ZM2.5 2.5C2.5 2.76522 2.60536 3.01957 2.79289 3.20711C2.98043 3.39464 3.23478 3.5 3.5 3.5C3.76522 3.5 4.01957 3.39464 4.20711 3.20711C4.39464 3.01957 4.5 2.76522 4.5 2.5C4.5 2.23478 4.39464 1.98043 4.20711 1.79289C4.01957 1.60536 3.76522 1.5 3.5 1.5C3.23478 1.5 2.98043 1.60536 2.79289 1.79289C2.60536 1.98043 2.5 2.23478 2.5 2.5Z" stroke="%2338BDF8" stroke-linecap="round" stroke-linejoin="round"/></svg>%0A';

// src/assets/role-super-admin.svg
var role_super_admin_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.342 20.566C12.906 20.736 12.458 20.881 12 21C10.4432 20.5962 8.98348 19.8836 7.70755 18.9045C6.43161 17.9254 5.36551 16.6998 4.5726 15.3005C3.77968 13.9013 3.27613 12.3569 3.09188 10.7592C2.90762 9.16147 3.04641 7.54302 3.5 6C6.61553 6.14257 9.66417 5.06658 12 3C14.3358 5.06658 17.3845 6.14257 20.5 6C21.1068 8.06461 21.1472 10.2544 20.617 12.34M19 16L17 19H21L19 22" stroke="%231E3A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>%0A';

// src/assets/role-super-admin-small.svg
var role_super_admin_small_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.671 10.283C6.453 10.368 6.229 10.4405 6 10.5C5.22161 10.2981 4.49174 9.94179 3.85377 9.45224C3.21581 8.96269 2.68275 8.34989 2.2863 7.65026C1.88984 6.95063 1.63807 6.17845 1.54594 5.37959C1.45381 4.58073 1.5232 3.77151 1.75 3C3.30776 3.07128 4.83208 2.53329 6 1.5C7.16792 2.53329 8.69224 3.07128 10.25 3C10.5534 4.03231 10.5736 5.1272 10.3085 6.17M9.5 8L8.5 9.5H10.5L9.5 11" stroke="%231E3A8A" stroke-linecap="round" stroke-linejoin="round"/></svg>%0A';

// src/assets/role-system-admin.svg
var role_system_admin_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C14.267 15 14.529 15.026 14.781 15.076M19 16L17 19H21L19 22M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z" stroke="%230F766E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>%0A';

// src/assets/role-system-admin-small.svg
var role_system_admin_small_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.5V9.5C3 8.96957 3.21071 8.46086 3.58579 8.08579C3.96086 7.71071 4.46957 7.5 5 7.5H7C7.1335 7.5 7.2645 7.513 7.3905 7.538M9.5 8L8.5 9.5H10.5L9.5 11M4 3.5C4 4.03043 4.21071 4.53914 4.58579 4.91421C4.96086 5.28929 5.46957 5.5 6 5.5C6.53043 5.5 7.03914 5.28929 7.41421 4.91421C7.78929 4.53914 8 4.03043 8 3.5C8 2.96957 7.78929 2.46086 7.41421 2.08579C7.03914 1.71071 6.53043 1.5 6 1.5C5.46957 1.5 4.96086 1.71071 4.58579 2.08579C4.21071 2.46086 4 2.96957 4 3.5Z" stroke="%230F766E" stroke-linecap="round" stroke-linejoin="round"/></svg>%0A';

// src/assets/role-user.svg
var role_user_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z" stroke="%23F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>%0A';

// src/assets/role-user-small.svg
var role_user_small_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.5V9.5C3 8.96957 3.21071 8.46086 3.58579 8.08579C3.96086 7.71071 4.46957 7.5 5 7.5H7C7.53043 7.5 8.03914 7.71071 8.41421 8.08579C8.78929 8.46086 9 8.96957 9 9.5V10.5M4 3.5C4 4.03043 4.21071 4.53914 4.58579 4.91421C4.96086 5.28929 5.46957 5.5 6 5.5C6.53043 5.5 7.03914 5.28929 7.41421 4.91421C7.78929 4.53914 8 4.03043 8 3.5C8 2.96957 7.78929 2.46086 7.41421 2.08579C7.03914 1.71071 6.53043 1.5 6 1.5C5.46957 1.5 4.96086 1.71071 4.58579 2.08579C4.21071 2.46086 4 2.96957 4 3.5Z" stroke="%23F59E0B" stroke-linecap="round" stroke-linejoin="round"/></svg>%0A';
var roleNames = {
  "organization-admin": "Organization Admin",
  "super-admin": "Super Admin",
  "system-admin": "System Admin",
  user: "User"
};
var roleIcons = {
  "organization-admin": role_organization_admin_default,
  "super-admin": role_super_admin_default,
  "system-admin": role_system_admin_default,
  user: role_user_default
};
var smallRoleIcons = {
  "organization-admin": role_organization_admin_small_default,
  "super-admin": role_super_admin_small_default,
  "system-admin": role_system_admin_small_default,
  user: role_user_small_default
};
var RoleBadge = forwardRef(function RoleBadge2({ className, role, size = 32, ...props }, ref) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      ...props,
      "aria-label": roleNames[role],
      className: clsx14("mosaic-role-badge", `mosaic-role-badge--${size}`, className),
      ref,
      role: "img",
      children: /* @__PURE__ */ jsx("img", { alt: "", src: (size === 16 ? smallRoleIcons : roleIcons)[role] })
    }
  );
});
var RoleBadgeCell = forwardRef(function RoleBadgeCell2({ className, role, showRoleName = true, ...props }, ref) {
  return /* @__PURE__ */ jsxs("span", { ...props, className: clsx14("mosaic-role-badge-cell", className), ref, children: [
    /* @__PURE__ */ jsx(RoleBadge, { role, size: 16 }),
    showRoleName ? /* @__PURE__ */ jsx("span", { children: roleNames[role] }) : null
  ] });
});

// src/assets/checkmark.svg
var checkmark_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="Checkmark">%0A<path id="Vector" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="%2310B981"/>%0A<path id="Vector_2" d="M6.76462 11.4632C6.60205 11.4634 6.44104 11.4315 6.29084 11.3693C6.14064 11.307 6.00423 11.2158 5.88942 11.1007L3.9091 9.12002C3.67696 8.88788 3.54655 8.57303 3.54655 8.24474C3.54655 7.91644 3.67696 7.60159 3.9091 7.36946C4.14124 7.13732 4.45608 7.0069 4.78438 7.0069C5.11267 7.0069 5.42752 7.13732 5.65966 7.36946L6.76462 8.47457L10.3403 4.8989C10.5724 4.66676 10.8872 4.53634 11.2155 4.53632C11.5438 4.53631 11.8586 4.6667 12.0908 4.89882C12.3229 5.13093 12.4533 5.44576 12.4534 5.77404C12.4534 6.10232 12.323 6.41716 12.0909 6.6493L7.63998 11.1007C7.52516 11.2158 7.38871 11.3071 7.23848 11.3693C7.08826 11.4315 6.92722 11.4634 6.76462 11.4632Z" fill="white"/>%0A</g>%0A</svg>%0A';

// src/assets/chevrons-up-down.svg
var chevrons_up_down_default = 'data:image/svg+xml,<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<g id="chevrons-up-down">%0A<path id="Vector" d="M4.66667 10L8 13.3333L11.3333 10" stroke="%23313B49" stroke-linecap="round" stroke-linejoin="round"/>%0A<path id="Vector_2" d="M4.66667 6L8 2.66667L11.3333 6" stroke="%23313B49" stroke-linecap="round" stroke-linejoin="round"/>%0A</g>%0A</svg>%0A';
var Select = forwardRef(function Select2({
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  children,
  className,
  counter,
  disabled = false,
  errorMessage,
  helpText,
  id,
  label,
  leadingIcon,
  size = "md",
  ...props
}, ref) {
  const generatedId = useId();
  const selectId = id ?? `mosaic-select-${generatedId}`;
  const helpId = helpText ? `${selectId}-help` : void 0;
  const errorId = errorMessage ? `${selectId}-error` : void 0;
  const describedBy = [ariaDescribedBy, helpId, errorId].filter(Boolean).join(" ") || void 0;
  const invalid = Boolean(errorMessage) || ariaInvalid === true || ariaInvalid === "true";
  const resolvedLeadingIcon = leadingIcon === void 0 ? /* @__PURE__ */ jsx("img", { alt: "", src: checkmark_default }) : leadingIcon === false ? null : leadingIcon;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx14(
        "mosaic-field",
        "mosaic-select",
        `mosaic-select--${size}`,
        disabled && "mosaic-field--disabled",
        invalid && "mosaic-field--invalid",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mosaic-field__label-row", children: [
          /* @__PURE__ */ jsx("label", { className: "mosaic-field__label", htmlFor: selectId, children: label }),
          counter ? /* @__PURE__ */ jsx("span", { className: "mosaic-field__counter", children: counter }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mosaic-field__control-column", children: [
          /* @__PURE__ */ jsxs("div", { className: "mosaic-select__field", children: [
            resolvedLeadingIcon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-field__icon", children: resolvedLeadingIcon }) : null,
            /* @__PURE__ */ jsx(
              "select",
              {
                ...props,
                "aria-describedby": describedBy,
                "aria-invalid": invalid || void 0,
                className: "mosaic-select__control",
                disabled,
                id: selectId,
                ref,
                children
              }
            ),
            /* @__PURE__ */ jsx("img", { "aria-hidden": "true", className: "mosaic-select__chevrons", src: chevrons_up_down_default })
          ] }),
          helpText ? /* @__PURE__ */ jsx("div", { className: "mosaic-field__help", id: helpId, children: helpText }) : null,
          errorMessage ? /* @__PURE__ */ jsx("div", { className: "mosaic-field__error", id: errorId, role: "alert", children: errorMessage }) : null
        ] })
      ]
    }
  );
});
var labels = {
  active: "Active",
  inactive: "Inactive",
  pending: "Pending",
  suspended: "Suspended",
  expired: "Expired"
};
var StatusBadge = forwardRef(function StatusBadge2({ children, className, status, ...props }, ref) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      ...props,
      className: clsx14("mosaic-status-badge", `mosaic-status-badge--${status}`, className),
      ref,
      children: children ?? labels[status]
    }
  );
});
var Switch = forwardRef(function Switch2({ className, disabled = false, id, indeterminate = false, label, size = "md", ...props }, forwardedRef) {
  const generatedId = useId();
  const inputRef = useRef(null);
  const inputId = id ?? `mosaic-switch-${generatedId}`;
  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const setRef = (node) => {
    inputRef.current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: clsx14(
        "mosaic-switch",
        `mosaic-switch--${size}`,
        disabled && "mosaic-switch--disabled",
        className
      ),
      htmlFor: inputId,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            ...props,
            className: "mosaic-switch__input",
            disabled,
            id: inputId,
            ref: setRef,
            role: "switch",
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "mosaic-switch__track",
            "data-indeterminate": indeterminate || void 0,
            children: /* @__PURE__ */ jsx("span", { className: "mosaic-switch__thumb" })
          }
        ),
        /* @__PURE__ */ jsx("span", { children: label })
      ]
    }
  );
});
var SidebarItem = forwardRef(
  function SidebarItem2({ active = false, badge, className, collapsed = false, icon, label, trailingIcon, ...props }, ref) {
    const content = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("span", { className: "mosaic-sidebar-item__main", children: [
        icon ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-sidebar-item__icon", children: icon }) : null,
        !collapsed ? /* @__PURE__ */ jsx("span", { children: label }) : null
      ] }),
      !collapsed && (badge || trailingIcon) ? /* @__PURE__ */ jsxs("span", { className: "mosaic-sidebar-item__end", children: [
        badge,
        trailingIcon
      ] }) : null
    ] });
    const classes = clsx14(
      "mosaic-sidebar-item",
      collapsed && "mosaic-sidebar-item--collapsed",
      active && "mosaic-sidebar-item--active",
      className
    );
    if ("href" in props && props.href)
      return /* @__PURE__ */ jsx(
        "a",
        {
          ...props,
          "aria-current": active ? "page" : void 0,
          "aria-label": collapsed ? label : void 0,
          className: classes,
          ref,
          children: content
        }
      );
    return /* @__PURE__ */ jsx(
      "button",
      {
        ...props,
        "aria-pressed": active || void 0,
        "aria-label": collapsed ? label : void 0,
        className: classes,
        ref,
        type: props.type ?? "button",
        children: content
      }
    );
  }
);
var Sidebar = forwardRef(function Sidebar2({
  children,
  className,
  collapsed = false,
  collapseLabel = "Collapse sidebar",
  expandLabel = "Expand sidebar",
  footer,
  header,
  navigationLabel = "Sidebar",
  onCollapsedChange,
  pinned = false,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      ...props,
      className: clsx14(
        "mosaic-sidebar",
        collapsed && "mosaic-sidebar--collapsed",
        pinned && "mosaic-sidebar--pinned",
        className
      ),
      ref,
      children: [
        header ? /* @__PURE__ */ jsx("div", { className: "mosaic-sidebar__header", children: header }) : null,
        /* @__PURE__ */ jsx("nav", { "aria-label": navigationLabel, className: "mosaic-sidebar__nav", children }),
        /* @__PURE__ */ jsxs("div", { className: "mosaic-sidebar__footer", children: [
          footer,
          onCollapsedChange ? /* @__PURE__ */ jsxs(
            "button",
            {
              "aria-label": collapsed ? expandLabel : collapseLabel,
              className: "mosaic-sidebar__collapse",
              onClick: () => onCollapsedChange(!collapsed),
              type: "button",
              children: [
                /* @__PURE__ */ jsx(ChevronIcon, { direction: collapsed ? "right" : "left" }),
                !collapsed ? /* @__PURE__ */ jsx("span", { children: collapseLabel }) : null
              ]
            }
          ) : null
        ] })
      ]
    }
  );
});
var Toast = forwardRef(function Toast2({
  actionLabel,
  className,
  description,
  dismissLabel = "Dismiss notification",
  error = false,
  leading,
  onAction,
  onDismiss,
  title,
  ...props
}, ref) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      "aria-atomic": "true",
      className: clsx14("mosaic-toast", error && "mosaic-toast--error", className),
      ref,
      role: error ? "alert" : "status",
      children: [
        leading ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "mosaic-snackbar__icon", children: leading }) : null,
        /* @__PURE__ */ jsxs("div", { className: "mosaic-toast__content", children: [
          /* @__PURE__ */ jsx("div", { className: "mosaic-toast__title", children: title }),
          description ? /* @__PURE__ */ jsx("div", { className: "mosaic-toast__description", children: description }) : null
        ] }),
        actionLabel ? /* @__PURE__ */ jsx("button", { className: "mosaic-toast__action", onClick: onAction, type: "button", children: actionLabel }) : null,
        onDismiss ? /* @__PURE__ */ jsx(
          "button",
          {
            "aria-label": dismissLabel,
            className: "mosaic-toast__dismiss",
            onClick: onDismiss,
            type: "button",
            children: /* @__PURE__ */ jsx(CloseIcon, {})
          }
        ) : null
      ]
    }
  );
});
var Snackbar = forwardRef(function Snackbar2({ className, icon, ...props }, ref) {
  return /* @__PURE__ */ jsx(Toast, { ...props, className: clsx14("mosaic-snackbar", className), leading: icon, ref });
});
var ToastViewport = forwardRef(function ToastViewport2({ children, className, expanded = true, label = "Notifications", ...props }, ref) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      "aria-label": label,
      className: clsx14(
        "mosaic-toast-viewport",
        expanded ? "mosaic-toast-viewport--expanded" : "mosaic-toast-viewport--stacked",
        className
      ),
      ref,
      role: "region",
      children
    }
  );
});
var Tabs = forwardRef(function Tabs2({
  className,
  defaultValue,
  onValueChange,
  orientation = "horizontal",
  stretch = false,
  tabs,
  type = "default",
  value,
  ...props
}, ref) {
  const generatedId = useId();
  const fallback = tabs.find((tab) => !tab.disabled)?.id ?? "";
  const [internalValue, setInternalValue] = useState(defaultValue ?? fallback);
  const selected = value ?? internalValue;
  const select = (id) => {
    if (value === void 0) setInternalValue(id);
    onValueChange?.(id);
  };
  const handleKeyDown = (event, index) => {
    const rtl = event.currentTarget.closest("[dir]")?.getAttribute("dir") === "rtl";
    const forward = orientation === "horizontal" ? rtl ? "ArrowLeft" : "ArrowRight" : "ArrowDown";
    const backward = orientation === "horizontal" ? rtl ? "ArrowRight" : "ArrowLeft" : "ArrowUp";
    if (![forward, backward, "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const enabled = tabs.map((tab, i) => ({ tab, i })).filter(({ tab }) => !tab.disabled);
    const current = enabled.findIndex(({ i }) => i === index);
    const next = event.key === "Home" ? enabled[0] : event.key === "End" ? enabled.at(-1) : enabled[(current + (event.key === forward ? 1 : -1) + enabled.length) % enabled.length];
    if (next) {
      select(next.tab.id);
      document.getElementById(`${generatedId}-tab-${next.tab.id}`)?.focus();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      className: clsx14(
        "mosaic-tabs",
        `mosaic-tabs--${orientation}`,
        `mosaic-tabs--${type}`,
        stretch && "mosaic-tabs--stretch",
        className
      ),
      ref,
      children: [
        /* @__PURE__ */ jsx("div", { "aria-orientation": orientation, className: "mosaic-tabs__list", role: "tablist", children: tabs.map((tab, index) => /* @__PURE__ */ jsx(
          "button",
          {
            "aria-controls": `${generatedId}-panel-${tab.id}`,
            "aria-selected": selected === tab.id,
            className: "mosaic-tabs__tab",
            disabled: tab.disabled,
            id: `${generatedId}-tab-${tab.id}`,
            onClick: () => select(tab.id),
            onKeyDown: (event) => handleKeyDown(event, index),
            role: "tab",
            tabIndex: selected === tab.id ? 0 : -1,
            type: "button",
            children: tab.label
          },
          tab.id
        )) }),
        tabs.map((tab) => /* @__PURE__ */ jsx(
          "div",
          {
            "aria-labelledby": `${generatedId}-tab-${tab.id}`,
            className: "mosaic-tabs__panel",
            hidden: selected !== tab.id,
            id: `${generatedId}-panel-${tab.id}`,
            role: "tabpanel",
            tabIndex: 0,
            children: tab.panel
          },
          tab.id
        ))
      ]
    }
  );
});
var lengthOf = (value, fallback) => {
  const current = value ?? fallback;
  return typeof current === "string" || typeof current === "number" ? String(current).length : 0;
};
var Textarea = forwardRef(function Textarea2({
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  className,
  counter = false,
  defaultValue,
  disabled = false,
  errorMessage,
  helpText,
  id,
  label,
  maxLength,
  value,
  ...props
}, ref) {
  const generatedId = useId();
  const textareaId = id ?? `mosaic-textarea-${generatedId}`;
  const helpId = helpText ? `${textareaId}-help` : void 0;
  const errorId = errorMessage ? `${textareaId}-error` : void 0;
  const describedBy = [ariaDescribedBy, helpId, errorId].filter(Boolean).join(" ") || void 0;
  const invalid = Boolean(errorMessage) || ariaInvalid === true || ariaInvalid === "true";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx14(
        "mosaic-field",
        "mosaic-textarea",
        disabled && "mosaic-field--disabled",
        invalid && "mosaic-field--invalid",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mosaic-field__label-row", children: [
          /* @__PURE__ */ jsx("label", { className: "mosaic-field__label", htmlFor: textareaId, children: label }),
          counter && maxLength ? /* @__PURE__ */ jsxs("span", { "aria-live": "polite", className: "mosaic-field__counter", children: [
            lengthOf(value, defaultValue),
            "/",
            maxLength
          ] }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mosaic-field__control-column", children: [
          /* @__PURE__ */ jsx(
            "textarea",
            {
              ...props,
              "aria-describedby": describedBy,
              "aria-invalid": invalid || void 0,
              className: "mosaic-textarea__control",
              defaultValue,
              disabled,
              id: textareaId,
              maxLength,
              ref,
              value
            }
          ),
          helpText ? /* @__PURE__ */ jsx("div", { className: "mosaic-field__help", id: helpId, children: helpText }) : null,
          errorMessage ? /* @__PURE__ */ jsx("div", { className: "mosaic-field__error", id: errorId, role: "alert", children: errorMessage }) : null
        ] })
      ]
    }
  );
});
var toMinutes = (value) => {
  const [hours = 0, minutes = 0] = value.split(":").map(Number);
  return hours * 60 + minutes;
};
var formatTime = (minutes) => `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
var TimePicker = forwardRef(function TimePicker2({
  className,
  defaultValue,
  disabled = false,
  end = "23:30",
  label,
  onValueChange,
  placeholder = "Select time",
  start = "00:00",
  step = 30,
  value,
  ...props
}, ref) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const listId = useId();
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const restoreFocusRef = useRef(false);
  const selected = value ?? internalValue;
  const options = useMemo(() => {
    const first = toMinutes(start);
    const last = toMinutes(end);
    const safeStep = Math.max(1, step);
    return Array.from(
      { length: Math.floor((last - first) / safeStep) + 1 },
      (_, index) => formatTime(first + index * safeStep)
    );
  }, [end, start, step]);
  const openList = () => {
    const selectedIndex = selected ? options.indexOf(selected) : -1;
    setActiveIndex(Math.max(0, selectedIndex));
    setOpen(true);
  };
  const closeList = (restoreFocus = true) => {
    restoreFocusRef.current = restoreFocus;
    setOpen(false);
  };
  const choose = (next) => {
    if (value === void 0) setInternalValue(next);
    onValueChange?.(next);
    closeList();
  };
  useEffect(() => {
    if (open) {
      listRef.current?.querySelector(`[data-index="${activeIndex}"]`)?.focus();
      return;
    }
    if (restoreFocusRef.current) {
      restoreFocusRef.current = false;
      triggerRef.current?.focus();
    }
  }, [activeIndex, listId, open]);
  const handleTriggerKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      openList();
    }
    if (event.key === "Escape" && open) {
      event.preventDefault();
      closeList();
    }
  };
  const handleOptionKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === "ArrowDown") nextIndex = (index + 1) % options.length;
    if (event.key === "ArrowUp") nextIndex = (index - 1 + options.length) % options.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = options.length - 1;
    if (nextIndex !== void 0) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closeList();
    }
    if (event.key === "Tab") closeList(false);
  };
  return /* @__PURE__ */ jsxs("div", { ...props, className: clsx14("mosaic-time-picker", className), ref, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        "aria-controls": listId,
        "aria-expanded": open,
        "aria-haspopup": "listbox",
        "aria-label": `${label}: ${selected || placeholder}`,
        className: "mosaic-time-picker__trigger",
        disabled,
        onClick: () => open ? closeList(false) : openList(),
        onKeyDown: handleTriggerKeyDown,
        ref: triggerRef,
        type: "button",
        children: [
          /* @__PURE__ */ jsx("span", { className: clsx14(!selected && "mosaic-time-picker__placeholder"), children: selected || placeholder }),
          /* @__PURE__ */ jsx(ChevronIcon, { direction: open ? "up" : "down" })
        ]
      }
    ),
    open ? /* @__PURE__ */ jsx(
      "div",
      {
        "aria-label": label,
        className: "mosaic-time-picker__list",
        id: listId,
        ref: listRef,
        role: "listbox",
        children: options.map((option, index) => /* @__PURE__ */ jsx(
          "button",
          {
            "aria-selected": selected === option,
            className: "mosaic-time-picker__option",
            "data-index": index,
            id: `${listId}-${index}`,
            onClick: () => choose(option),
            onKeyDown: (event) => handleOptionKeyDown(event, index),
            role: "option",
            tabIndex: activeIndex === index ? 0 : -1,
            type: "button",
            children: option
          },
          option
        ))
      }
    ) : null
  ] });
});
var Tooltip = forwardRef(function Tooltip2({ children, className, content, placement = "top", ...props }, ref) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const existingDescription = children.props["aria-describedby"];
  const child = isValidElement(children) ? cloneElement(children, {
    "aria-describedby": open ? [existingDescription, id].filter(Boolean).join(" ") : existingDescription,
    onBlur: (event) => {
      children.props.onBlur?.(event);
      setOpen(false);
    },
    onFocus: (event) => {
      children.props.onFocus?.(event);
      setOpen(true);
    },
    onMouseEnter: (event) => {
      children.props.onMouseEnter?.(event);
      setOpen(true);
    },
    onMouseLeave: (event) => {
      children.props.onMouseLeave?.(event);
      setOpen(false);
    },
    onKeyDown: (event) => {
      children.props.onKeyDown?.(event);
      if (event.key === "Escape") setOpen(false);
    }
  }) : children;
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ...props,
      className: clsx14("mosaic-tooltip", `mosaic-tooltip--${placement}`, className),
      ref,
      children: [
        child,
        open ? /* @__PURE__ */ jsx("span", { className: "mosaic-tooltip__content", id, role: "tooltip", children: content }) : null
      ]
    }
  );
});
var TopNavigation = forwardRef(function TopNavigation2({ account, actions, brand, className, navigation, navigationLabel = "Primary", ...props }, ref) {
  return /* @__PURE__ */ jsxs("header", { ...props, className: clsx14("mosaic-top-navigation", className), ref, children: [
    /* @__PURE__ */ jsx("div", { className: "mosaic-top-navigation__brand", children: brand }),
    navigation ? /* @__PURE__ */ jsx("nav", { "aria-label": navigationLabel, className: "mosaic-top-navigation__nav", children: navigation }) : null,
    /* @__PURE__ */ jsxs("div", { className: "mosaic-top-navigation__actions", children: [
      actions,
      account
    ] })
  ] });
});

// src/index.ts
var mosaicReactPackage = "@mosaic-ds/react";

export { Accordion, Avatar, Badge, Breadcrumb, Button, ButtonGroup, Calendar, Checkbox, CloseButton, DashboardToggle, DatePicker, Dialog, DialogFooter, DialogHeader, Divider, FileUploader, IconButton, Input, Pagination, Progress, Radio, RoleBadge, RoleBadgeCell, SearchField, Select, Sidebar, SidebarItem, Snackbar, StatusBadge, Switch, Tabs, Textarea, TimePicker, Toast, ToastViewport, Tooltip, TopNavigation, mosaicReactPackage };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map