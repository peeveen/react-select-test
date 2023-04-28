# Demo App

Demo app for [this issue](https://github.com/JedWatson/react-select/issues/5472).

## UI disruption when different theme object is returned

1. Run and launch app (localhost:3000)
2. Scroll to bottom of screen
3. Open menu on react-select controls at the foot of the screen

- Some menus (usually the bottom-most) are impossible to get the mouse onto
- Some menus change size as the mouse moves over the options

In [App.tsx](./src/App.tsx), if you change this line:

```typescript
theme={(theme) => ({ ...theme })}
```

to:

```typescript
theme={(theme) => theme }
```

... (or remove the line entirely) ...

... _then the problem goes away!_ 😮

## Expanding controls

Keep typing text into the search input, and the control grows and grows.

Uncomment this line in [App.tsx](./src/App.tsx) to prevent it:

```typescript
//delete (styles["&:after"] as any)["content"]
```
