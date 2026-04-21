---
name: performance-optimizer
description: Use when apps are slow, page load times are high, API responses lag, or database queries take too long. Covers measuring bottlenecks, database optimization (N+1, indexing), API caching, frontend re-render prevention, bundle size reduction, algorithm optimization, and memory management. Always measure before and after.
license: MIT
metadata:
  version: "1.0.0"
  category: devops
---

# Performance Optimizer

Find and fix performance bottlenecks. Measure, optimize, verify.

## When to Use

- App is slow or laggy
- Page load times are high
- API responses are slow
- Database queries take too long
- User mentions "slow", "lag", "performance", or "optimize"

## The Process

### 1. Measure First

Never optimize without measuring:

```js
console.time('operation');
await slowOperation();
console.timeEnd('operation'); // operation: 2341ms
```

**What to measure:** Page load time, API response time, DB query time, function execution time, memory usage, network requests.

### 2. Find the Bottleneck

| Environment | Tool |
|-------------|------|
| Browser | DevTools → Performance tab → Record → Stop (look for red bars) |
| Node.js | `node --prof app.js` → `node --prof-process` |
| Database | `EXPLAIN ANALYZE SELECT ...` |

### 3. Optimize

Fix the slowest thing first (biggest impact).

## Common Optimizations

### Database: N+1 Queries

```js
// Bad: N+1 queries
const users = await db.users.find();
for (const user of users) {
  user.posts = await db.posts.find({ userId: user.id }); // N queries
}

// Good: Single query with JOIN/populate
const users = await db.users.find().populate('posts'); // 1 query
```

### Database: Missing Index

```sql
-- Check slow query
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
-- Shows: Seq Scan (bad)

-- Add index
CREATE INDEX idx_users_email ON users(email);

-- Verify
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';
-- Shows: Index Scan (good)
```

### Database: SELECT *

```js
// Bad
const users = await db.query('SELECT * FROM users');

// Good
const users = await db.query('SELECT id, name, email FROM users');
```

### API: No Caching

```js
// Good: Cache expensive operations
const cache = new Map();
app.get('/api/stats', async (req, res) => {
  const cached = cache.get('stats');
  if (cached && Date.now() - cached.time < 300000) {
    return res.json(cached.data);
  }
  const stats = await db.stats.calculate();
  cache.set('stats', { data: stats, time: Date.now() });
  res.json(stats);
});
```

### API: Sequential → Parallel

```js
// Bad: Sequential (650ms)
const user = await getUser(id);
const posts = await getPosts(id);
const comments = await getComments(id);

// Good: Parallel (300ms)
const [user, posts, comments] = await Promise.all([
  getUser(id), getPosts(id), getComments(id)
]);
```

### Frontend: Unnecessary Re-renders

```tsx
// Bad
function UserList({ users }) {
  return users.map(user => <UserCard user={user} />);
}

// Good: Memoized
const UserCard = React.memo(({ user }) => <div>{user.name}</div>);
```

### Frontend: Large Bundle

```js
// Bad: Imports entire library
import _ from 'lodash'; // 70KB

// Good: Import only what you need
import debounce from 'lodash/debounce'; // 2KB
```

### Frontend: No Code Splitting

```tsx
// Good: Lazy load
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

### Algorithm: O(n²) → O(n)

```js
// Bad: O(n²)
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) duplicates.push(arr[i]);
    }
  }
  return duplicates;
}

// Good: O(n)
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of arr) {
    if (seen.has(item)) duplicates.add(item);
    seen.add(item);
  }
  return Array.from(duplicates);
}
```

### Memory: Event Listener Leak

```tsx
// Bad
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  // Memory leak!
}, []);

// Good
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## Performance Budgets

| Metric | Target |
|--------|--------|
| Page Load | < 2 seconds |
| API Response | < 200ms |
| Database Query | < 50ms |
| Bundle Size | < 200KB |
| Time to Interactive | < 3 seconds |

## Quick Wins (Big Impact, Low Effort)

1. Add database indexes on frequently queried columns
2. Enable gzip compression on server
3. Add caching for expensive operations
4. Lazy load images and heavy components
5. Use CDN for static assets
6. Minify and compress JavaScript/CSS
7. Remove unused dependencies
8. Use pagination instead of loading all data
9. Optimize images (WebP, proper sizing)
10. Enable HTTP/2 on server

## Optimization Checklist

- [ ] Measured current performance
- [ ] Identified bottleneck
- [ ] Applied optimization
- [ ] Measured improvement
- [ ] Verified functionality still works
- [ ] No new bugs introduced
- [ ] Documented the change

## When NOT to Optimize

- Premature optimization (optimize when it's actually slow)
- Micro-optimizations (save 1ms when page takes 5 seconds)
- Readable code is more important than tiny speed gains
- If it's already fast enough

## Key Principles

- **Measure before optimizing**
- **Fix the biggest bottleneck first**
- **Measure after to prove improvement**
- **Don't sacrifice readability for tiny gains**
- **Consider the 80/20 rule** (20% of code causes 80% of slowness)
