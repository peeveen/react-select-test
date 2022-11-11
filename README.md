# Demo App

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
