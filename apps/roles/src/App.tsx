import { useEffect, useMemo, useState } from 'react';
import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Checkbox,
  IconButton,
  Input,
  Pagination,
  SearchField,
  Sidebar,
  SidebarItem,
  StatusBadge,
  Switch,
  Textarea,
  TopNavigation,
} from '@mosaic-ds/react';

type SidebarMode = 'collapsed' | 'expanded' | 'pinned';
type SortKey = 'name' | 'creator' | 'date' | 'users';
type View = 'roles' | 'create-role';

type Role = {
  creator: string;
  date: string;
  dateValue: string;
  name: string;
  users: number;
};

const roles: Role[] = [
  {
    name: 'Cloud Security Specialist',
    creator: 'Malcolm Turner',
    date: 'Tue Jun 17 2025',
    dateValue: '2025-06-17',
    users: 99,
  },
  {
    name: 'IAM Policy Architect',
    creator: 'Mrs. Eunice Upton',
    date: 'Mon Jun 16 2025',
    dateValue: '2025-06-16',
    users: 99,
  },
  {
    name: 'Access Management Engineer',
    creator: 'Mandy Carter MD',
    date: 'Sun Jun 15 2025',
    dateValue: '2025-06-15',
    users: 99,
  },
  {
    name: 'Identity Governance Analyst',
    creator: 'Tina Gaylord',
    date: 'Sat Jun 14 2025',
    dateValue: '2025-06-14',
    users: 99,
  },
  {
    name: 'Authentication Solutions Developer',
    creator: 'Kathleen Collier',
    date: 'Fri Jun 13 2025',
    dateValue: '2025-06-13',
    users: 99,
  },
  {
    name: 'Authentication Solutions Developer',
    creator: 'Mildred Nolan',
    date: 'Thu Jun 12 2025',
    dateValue: '2025-06-12',
    users: 99,
  },
  {
    name: 'Cybersecurity Incident Responder',
    creator: 'Mr. Victoria Beer',
    date: 'Wed Jun 11 2025',
    dateValue: '2025-06-11',
    users: 99,
  },
  {
    name: 'Network Security Analyst',
    creator: 'Miss Abel McLaughlin',
    date: 'Tue Jun 10 2025',
    dateValue: '2025-06-10',
    users: 99,
  },
  {
    name: 'Application Security Tester',
    creator: 'Gayle Effertz',
    date: 'Mon Jun 09 2025',
    dateValue: '2025-06-09',
    users: 99,
  },
  {
    name: 'Security Compliance Manager',
    creator: 'Kirk Stehr',
    date: 'Sun Jun 08 2025',
    dateValue: '2025-06-08',
    users: 99,
  },
  {
    name: 'Threat Intelligence Analyst',
    creator: 'Chelsea Parisian',
    date: 'Sat Jun 07 2025',
    dateValue: '2025-06-07',
    users: 99,
  },
  {
    name: 'Threat Intelligence Analyst',
    creator: 'Tony Spinka DVM',
    date: 'Fri Jun 06 2025',
    dateValue: '2025-06-06',
    users: 99,
  },
  {
    name: 'Penetration Tester',
    creator: 'Robin Wiza',
    date: 'Thu Jun 05 2025',
    dateValue: '2025-06-05',
    users: 99,
  },
  {
    name: 'Vulnerability Management Specialist',
    creator: 'Julius Harvey',
    date: 'Wed Jun 04 2025',
    dateValue: '2025-06-04',
    users: 99,
  },
  {
    name: 'Security Awareness Trainer',
    creator: 'Charlene Hartmann',
    date: 'Tue Jun 03 2025',
    dateValue: '2025-06-03',
    users: 99,
  },
  {
    name: 'Security Awareness Trainer',
    creator: 'Louise Hartmann',
    date: 'Tue Jun 03 2025',
    dateValue: '2025-06-03',
    users: 99,
  },
];

const asset = (name: string) => `/assets/${name}`;
const ImgIcon = ({ name }: { name: string }) => <img alt="" src={asset(name)} />;

type AssignableUser = {
  name: string;
  status: 'active' | 'inactive';
};

const assignableUsers: AssignableUser[] = [
  { name: 'Vivian Keebler', status: 'active' },
  { name: 'Mrs. April Conroy', status: 'active' },
  { name: 'Betty Bayer', status: 'active' },
  { name: 'Glen Stamm Sr.', status: 'active' },
  { name: 'Samantha Fox', status: 'active' },
  { name: 'Elena Rizzo', status: 'active' },
  { name: 'Henry Wexler', status: 'active' },
  { name: 'Milo Dorsey', status: 'active' },
  { name: 'Rachel Greenfield', status: 'active' },
  { name: 'Jacob Price', status: 'active' },
  { name: 'Nina Patel', status: 'active' },
  { name: 'Oscar Langley', status: 'inactive' },
  { name: 'Tara McKinney', status: 'active' },
  { name: 'Liam Chen', status: 'active' },
  { name: 'Sophie Ainsworth', status: 'active' },
  { name: 'Ethan Sanders', status: 'active' },
  { name: 'Claire Hudson', status: 'inactive' },
  { name: 'Maximilian Torres', status: 'active' },
  { name: 'Isabella Reyes', status: 'active' },
  { name: 'Oliver Grant', status: 'active' },
  { name: 'Ava Thompson', status: 'active' },
  { name: 'Jameson Lee', status: 'active' },
];

const permissionGroups = [
  {
    name: 'System Management',
    permissions: [
      'Manage System Admins',
      'View Removed Organizations',
      'Restore Removed Organizations',
    ],
  },
  {
    name: 'Organization Management',
    permissions: [
      'Create Organization',
      'View Organizations',
      'Modify Organization',
      'Remove Organization',
      'Enable / Disable Organization',
      'Export Organization List',
    ],
  },
  {
    name: 'System Management',
    permissions: [
      'Create Users',
      'View Users',
      'Modify Users',
      'Remove Users',
      'Enable / Disable Users',
      'Assign Users Roles',
      'Assign Users Organization Access',
      'Export User List to Excell',
    ],
  },
  {
    name: 'System Management',
    permissions: [
      'Create Role',
      'View Roles',
      'Modify Roles',
      'Remove Role',
      'Manage Role Permissions',
      'Assign/Unassign Roles',
    ],
  },
] as const;

function AppSidebar({
  mode,
  onModeChange,
}: {
  mode: SidebarMode;
  onModeChange: (mode: SidebarMode) => void;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mode === 'expanded') onModeChange('collapsed');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mode, onModeChange]);

  if (mode === 'pinned') {
    return (
      <Sidebar
        className="app-sidebar app-sidebar--pinned"
        collapsed
        navigationLabel="Pinned navigation"
        pinned
      >
        <button
          aria-label="Unpin sidebar"
          aria-pressed={true}
          className="sidebar-toggle sidebar-toggle--pinned"
          onClick={() => onModeChange('collapsed')}
          type="button"
        >
          <ImgIcon name="chevrons-right.svg" />
        </button>
        <div className="rail-navigation" aria-label="Current navigation path">
          <ImgIcon name="home.svg" />
          <span aria-hidden="true" className="rail-active-line" />
          <div className="rail-path">
            <span>Home</span>
            <span aria-hidden="true">⌄</span>
            <span aria-hidden="true">•••</span>
            <span aria-hidden="true">⌄</span>
            <span>Identity &amp; Access Management</span>
            <span aria-hidden="true">⌄</span>
            <strong>Roles</strong>
          </div>
        </div>
      </Sidebar>
    );
  }

  const expanded = mode === 'expanded';

  return (
    <Sidebar
      className={`app-sidebar ${expanded ? 'app-sidebar--expanded' : 'app-sidebar--collapsed'}`}
      collapsed={!expanded}
      header={
        expanded ? (
          <div className="company-switcher">
            <ImgIcon name="store.svg" />
            <strong>Company Name</strong>
          </div>
        ) : (
          <div className="company-initials" aria-label="Company Name">
            CN
          </div>
        )
      }
      navigationLabel="Main navigation"
      onMouseMove={(event) => {
        if (mode === 'collapsed' && !(event.target as Element).closest('.sidebar-toggle')) {
          onModeChange('expanded');
        }
      }}
      onMouseLeave={() => {
        if (mode === 'expanded') onModeChange('collapsed');
      }}
    >
      <span className="sidebar-label">Menu</span>
      <SidebarItem
        collapsed={!expanded}
        href="#dashboard"
        icon={<ImgIcon name="home.svg" />}
        label="Dashboard"
      />
      <SidebarItem
        badge={expanded ? <Badge className="project-count">2</Badge> : undefined}
        collapsed={!expanded}
        href="#projects"
        icon={<ImgIcon name="projects.svg" />}
        label="Projects"
      />
      {!expanded ? <span aria-hidden="true" className="compact-project-dot" /> : null}
      {!expanded ? (
        <button
          aria-label="Pin sidebar"
          aria-pressed={false}
          className="sidebar-toggle sidebar-toggle--collapsed"
          onClick={() => onModeChange('pinned')}
          type="button"
        >
          <ImgIcon name="chevrons-right.svg" />
        </button>
      ) : null}
    </Sidebar>
  );
}

function AppHeader() {
  return (
    <TopNavigation
      className="app-top-navigation"
      brand={
        <a className="mosaic-brand" href="#roles" aria-label="Mosaic home">
          <ImgIcon name="mosaic-logo.svg" />
          <span>Mosaic</span>
        </a>
      }
      actions={
        <>
          <IconButton aria-label="Search" icon={<ImgIcon name="nav-search.svg" />} />
          <IconButton aria-label="Settings" icon={<ImgIcon name="settings.svg" />} />
          <IconButton aria-label="Calendar" icon={<ImgIcon name="calendar.svg" />} />
          <IconButton
            aria-label="Notifications"
            icon={<ImgIcon name="bell.svg" />}
            notification={12}
          />
        </>
      }
      account={
        <Avatar
          name="Ahmed Galal"
          size="md"
          shape="rounded"
          src={asset('avatar.png')}
          roleBadge={<ImgIcon name="shield.svg" />}
          tabIndex={0}
        />
      }
    />
  );
}

function SortButton({
  active,
  direction,
  label,
  onClick,
}: {
  active: boolean;
  direction: 'asc' | 'desc';
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      className="sort-button"
      onClick={onClick}
      type="button"
      aria-label={`Sort by ${label}, ${active ? direction : 'not sorted'}`}
    >
      <span>{label}</span>
      <img
        alt=""
        className={active && direction === 'asc' ? 'sort-icon sort-icon--asc' : 'sort-icon'}
        src={asset('sort-down.svg')}
      />
    </button>
  );
}

function RolesTable({ query }: { query: string }) {
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [direction, setDirection] = useState<'asc' | 'desc'>('desc');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const visibleRoles = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = normalized
      ? roles.filter((role) =>
          `${role.name} ${role.creator} ${role.date}`.toLowerCase().includes(normalized),
        )
      : roles;
    const value = (role: Role) =>
      sortKey === 'name'
        ? role.name
        : sortKey === 'creator'
          ? role.creator
          : sortKey === 'date'
            ? role.dateValue
            : role.users;
    return [...filtered].sort((a, b) => {
      const result = String(value(a)).localeCompare(String(value(b)), undefined, { numeric: true });
      return direction === 'asc' ? result : -result;
    });
  }, [direction, query, sortKey]);

  const changeSort = (key: SortKey) => {
    if (key === sortKey) setDirection((current) => (current === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(key);
      setDirection('asc');
    }
  };

  return (
    <>
      <div className="table-scroll">
        <table className="roles-table">
          <caption className="mosaic-visually-hidden">
            Roles, creators, creation dates, and assigned user counts
          </caption>
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col className="action-column" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">
                <SortButton
                  active={sortKey === 'name'}
                  direction={direction}
                  label="Role Name"
                  onClick={() => changeSort('name')}
                />
              </th>
              <th scope="col">
                <SortButton
                  active={sortKey === 'creator'}
                  direction={direction}
                  label="Created By"
                  onClick={() => changeSort('creator')}
                />
              </th>
              <th scope="col">
                <SortButton
                  active={sortKey === 'date'}
                  direction={direction}
                  label="Date Created"
                  onClick={() => changeSort('date')}
                />
              </th>
              <th scope="col">
                <SortButton
                  active={sortKey === 'users'}
                  direction={direction}
                  label="Number of users assigned"
                  onClick={() => changeSort('users')}
                />
              </th>
              <th scope="col">
                <span className="mosaic-visually-hidden">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleRoles.length ? (
              visibleRoles.map((role) => (
                <tr key={`${role.name}-${role.creator}`}>
                  <th scope="row">{role.name}</th>
                  <td>{role.creator}</td>
                  <td>
                    <time dateTime={role.dateValue}>{role.date}</time>
                  </td>
                  <td>
                    <Badge className="users-badge" rounded={false} variant="outline">
                      {role.users}
                    </Badge>
                  </td>
                  <td className="row-actions">
                    <IconButton
                      aria-label={`Actions for ${role.name}`}
                      className="row-action-button"
                      icon={<ImgIcon name="vertical-dots.svg" />}
                      onClick={() =>
                        setActiveMenu((current) => (current === role.name ? null : role.name))
                      }
                      size="sm"
                    />
                    {activeMenu === role.name ? (
                      <div className="row-menu" role="menu">
                        <button role="menuitem" type="button">
                          Edit role
                        </button>
                        <button role="menuitem" type="button">
                          Duplicate
                        </button>
                      </div>
                    ) : null}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="empty-state" colSpan={5}>
                  No roles match “{query}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="roles-pagination">
        <Pagination currentPage={page} onPageChange={setPage} siblingCount={4} totalPages={7} />
      </div>
    </>
  );
}

function CreateRolePage({ onClose }: { onClose: () => void }) {
  const [roleName, setRoleName] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [assignedUsers, setAssignedUsers] = useState<AssignableUser[]>([]);
  const [expandedGroups, setExpandedGroups] = useState<boolean[]>(
    permissionGroups.map(() => false),
  );
  const [selectedPermissions, setSelectedPermissions] = useState<Set<string>>(new Set());

  const availableUsers = assignableUsers.filter(
    (user) =>
      !assignedUsers.some((assigned) => assigned.name === user.name) &&
      user.name.toLowerCase().includes(userQuery.trim().toLowerCase()),
  );

  const setGroupEnabled = (groupIndex: number, enabled: boolean) => {
    const group = permissionGroups[groupIndex]!;
    setSelectedPermissions((current) => {
      const next = new Set(current);
      group.permissions.forEach((permission) => {
        if (enabled) next.add(permission);
        else next.delete(permission);
      });
      return next;
    });
    if (enabled) {
      setExpandedGroups((current) => current.map((value, index) => index === groupIndex || value));
    }
  };

  const togglePermission = (permission: string, checked: boolean) => {
    setSelectedPermissions((current) => {
      const next = new Set(current);
      if (checked) next.add(permission);
      else next.delete(permission);
      return next;
    });
  };

  return (
    <form
      className="create-role-card"
      aria-labelledby="create-role-title"
      onSubmit={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <header className="create-role-header">
        <IconButton
          aria-label="Back to roles"
          className="create-role-back"
          icon={
            <span aria-hidden="true" className="back-arrow">
              ↩
            </span>
          }
          onClick={onClose}
          size="md"
          type="button"
        />
        <div className="create-role-heading">
          <h1 id="create-role-title">Create New Role</h1>
          <p>Define and configure a role with specific permissions</p>
        </div>
        <div className="create-role-actions">
          <Button className="create-role-cancel" onClick={onClose} type="button" variant="tertiary">
            Cancel
          </Button>
          <Button
            className="create-role-save"
            leadingIcon={<span aria-hidden="true">▣</span>}
            type="submit"
          >
            Save
          </Button>
        </div>
      </header>

      <div className="create-role-body">
        <section className="role-details" aria-label="Role details and assigned users">
          <div className="role-details__fields">
            <Input
              label="Role Name"
              name="roleName"
              onChange={(event) => setRoleName(event.currentTarget.value)}
              placeholder="Enter Your Role Name"
              required
              value={roleName}
            />
            <Textarea
              label="Role Description"
              maxLength={100}
              name="roleDescription"
              onChange={(event) => setRoleDescription(event.currentTarget.value)}
              placeholder="Type Your Role Description"
              value={roleDescription}
            />

            <div className="user-picker">
              <span className="user-picker__label">Users Assigned</span>
              <button
                aria-expanded={pickerOpen}
                aria-haspopup="listbox"
                className="user-picker__trigger"
                onClick={() => setPickerOpen((current) => !current)}
                type="button"
              >
                <span aria-hidden="true" className="select-check">
                  ✓
                </span>
                <span>Select...</span>
                <span aria-hidden="true" className="select-chevron">
                  ⌃⌄
                </span>
              </button>
              {pickerOpen ? (
                <div className="user-picker__popover">
                  <SearchField
                    aria-label="Search users"
                    autoFocus
                    onChange={(event) => setUserQuery(event.currentTarget.value)}
                    placeholder="Type For Search..."
                    value={userQuery}
                  />
                  <div className="user-picker__options" role="listbox" aria-label="Available users">
                    {availableUsers.length ? (
                      availableUsers.map((user) => (
                        <button
                          aria-selected="false"
                          key={user.name}
                          onClick={() => {
                            setAssignedUsers((current) => [...current, user]);
                            setUserQuery('');
                            setPickerOpen(false);
                          }}
                          role="option"
                          type="button"
                        >
                          <Avatar aria-hidden="true" name={user.name} size="sm" />
                          <span>{user.name}</span>
                        </button>
                      ))
                    ) : (
                      <p className="user-picker__no-results">No users found</p>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="assigned-users">
            <table>
              <caption className="mosaic-visually-hidden">Users assigned to this role</caption>
              <thead>
                <tr>
                  <th scope="col">
                    Users <span aria-hidden="true">↓</span>
                  </th>
                  <th scope="col">
                    Status <span aria-hidden="true">↓</span>
                  </th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {assignedUsers.length ? (
                <tbody>
                  {assignedUsers.map((user) => (
                    <tr key={user.name}>
                      <td>
                        <Avatar aria-hidden="true" name={user.name} size="sm" />
                        <span>{user.name}</span>
                      </td>
                      <td>
                        <StatusBadge status={user.status} />
                      </td>
                      <td>
                        <IconButton
                          aria-label={`Remove ${user.name}`}
                          className="remove-user"
                          icon={<span aria-hidden="true">♙</span>}
                          onClick={() =>
                            setAssignedUsers((current) =>
                              current.filter((item) => item.name !== user.name),
                            )
                          }
                          size="sm"
                          type="button"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : null}
            </table>
            {!assignedUsers.length ? (
              <div className="assigned-users__empty">
                <img alt="" src={asset('no-users.svg')} />
                <p>No Users Have Been Assigned Yet</p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="permissions-panel" aria-label="Role permissions">
          <div className="permissions-table-header">
            <span>Permissions Name</span>
            <span>Action</span>
          </div>
          {permissionGroups.map((group, groupIndex) => {
            const selectedCount = group.permissions.filter((permission) =>
              selectedPermissions.has(permission),
            ).length;
            const enabled = selectedCount === group.permissions.length;
            const indeterminate = selectedCount > 0 && !enabled;
            const expanded = expandedGroups[groupIndex];
            return (
              <div className="permission-group" key={`${group.name}-${groupIndex}`}>
                <div className="permission-group__topline">
                  <button
                    aria-expanded={expanded}
                    className="permission-group__expand"
                    onClick={() =>
                      setExpandedGroups((current) =>
                        current.map((value, index) => (index === groupIndex ? !value : value)),
                      )
                    }
                    type="button"
                  >
                    <span>{group.name}</span>
                    <span
                      aria-hidden="true"
                      className={expanded ? 'group-chevron group-chevron--open' : 'group-chevron'}
                    >
                      ⌄
                    </span>
                  </button>
                  <Switch
                    checked={enabled}
                    className="permission-switch"
                    indeterminate={indeterminate}
                    label={`${enabled ? 'Disable' : 'Enable'} ${group.name} permissions`}
                    onChange={(event) => setGroupEnabled(groupIndex, event.currentTarget.checked)}
                    size="sm"
                  />
                </div>
                {expanded ? (
                  <div className="permission-group__options">
                    {group.permissions.map((permission) => (
                      <Checkbox
                        checked={selectedPermissions.has(permission)}
                        key={permission}
                        label={permission}
                        onChange={(event) =>
                          togglePermission(permission, event.currentTarget.checked)
                        }
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>
      </div>
    </form>
  );
}

export function App() {
  const [sidebarMode, setSidebarMode] = useState<SidebarMode>('collapsed');
  const [query, setQuery] = useState('');
  const [view, setView] = useState<View>('roles');

  return (
    <div className="app-shell" data-mosaic-root data-sidebar-mode={sidebarMode}>
      <AppSidebar mode={sidebarMode} onModeChange={setSidebarMode} />
      <div className="app-stage">
        <AppHeader />
        <main id="roles">
          <div className="breadcrumb-bar">
            <IconButton
              aria-label={sidebarMode === 'collapsed' ? 'Expand sidebar' : 'Collapse sidebar'}
              className="breadcrumb-toggle"
              icon={<ImgIcon name="panel-left.svg" />}
              onClick={() =>
                setSidebarMode((current) => (current === 'collapsed' ? 'expanded' : 'collapsed'))
              }
              size="md"
            />
            <span aria-hidden="true" className="breadcrumb-divider" />
            <Breadcrumb
              items={[
                { href: '#home', label: 'Home' },
                { href: '#workspace', label: 'Workspace' },
                { href: '#administration', label: 'Administration' },
                { label: 'Identity & Access Management' },
                ...(view === 'create-role'
                  ? [{ href: '#roles', label: 'Roles' }, { label: 'Create New Role' }]
                  : [{ label: 'Roles' }]),
              ]}
              maxItems={4}
            />
          </div>

          {view === 'roles' ? (
            <section className="roles-card" aria-labelledby="roles-title">
              <div className="roles-card__header">
                <div className="roles-heading">
                  <div className="roles-heading__title-row">
                    <h1 id="roles-title">Roles</h1>
                    <Badge>22</Badge>
                  </div>
                  <p>A set of permissions that shapes user responsibilities.</p>
                </div>
                <SearchField
                  aria-label="Search roles"
                  className="roles-search"
                  onChange={(event) => setQuery(event.currentTarget.value)}
                  placeholder="Type For Search..."
                  value={query}
                />
                <div className="roles-actions">
                  <Button
                    leadingIcon={<ImgIcon name="plus.svg" />}
                    onClick={() => setView('create-role')}
                    size="md"
                  >
                    Create New Role
                  </Button>
                </div>
              </div>
              <RolesTable query={query} />
            </section>
          ) : (
            <CreateRolePage onClose={() => setView('roles')} />
          )}
        </main>
      </div>
    </div>
  );
}
