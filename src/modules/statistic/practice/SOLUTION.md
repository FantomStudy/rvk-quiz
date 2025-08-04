# Решение проблемы типизации и отображения таблиц

## Проблема
В зависимости от фильтра номинации, API возвращает разные типы данных для `tasks`:
- `NominationTask[]` - с полями `penalty`, `score`, `time`
- `Task[]` - с полями `name`, `points`

Это влияет на вид таблицы и ее содержимое.

## Решение

### 1. Type Guards (`utils.ts`)
Созданы функции для определения типа данных:
```typescript
export const isNominationTaskArray = (tasks: Array<NominationTask | Task>): tasks is NominationTask[]
export const isTaskArray = (tasks: Array<NominationTask | Task>): tasks is Task[]
```

### 2. Специализированные компоненты таблиц
- `NominationTable` - для отображения данных типа `NominationTask[]`
- `TasksTable` - для отображения данных типа `Task[]`

### 3. Условный рендеринг (`PracticeStatePage.tsx`)
```typescript
const isNominationTasksType = firstItem?.tasks && isNominationTaskArray(firstItem.tasks);
const isTasksType = firstItem?.tasks && isTaskArray(firstItem.tasks);

{isNominationTasksType && <NominationTable data={data} />}
{isTasksType && <TasksTable data={data} />}
```

## Преимущества решения

1. **Типобезопасность** - TypeScript точно знает, с каким типом данных работает
2. **Расширяемость** - легко добавить новые типы таблиц
3. **Читаемость** - четкое разделение логики для разных типов данных
4. **Повторное использование** - компоненты таблиц можно использовать в других местах

## Структура файлов
```
practice/
├── components/
│   ├── index.ts
│   ├── NominationTable.tsx
│   └── TasksTable.tsx
├── pages/
│   └── PracticeStatePage.tsx
├── types.ts
└── utils.ts
```
