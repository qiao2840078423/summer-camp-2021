## 1. 为什么只在 React 函数组件中调用 Hook

https://juejin.cn/post/7020811068955951135

以`useState`为例，`useState`内部会调用`ReactCurrentDispatcher.current.useState`，由于只有在函数组件执行前才会将`ReactCurrentDispatcher.current`设置为`HooksDispatcherOnMount`或`HooksDispatcherOnUpdate`，当函数组件执行完后`ReactCurrentDispatcher.current`马上被设置为`ContextOnlyDispatcher`，所以在 React 函数组件外使用`useState`时，`useState`内部会调用`ContextOnlyDispatcher.useState`，该函数是会报错的。其他 `hooks` 同理。

## 2. 为什么只在最顶层使用 Hook

每次调用 `hooks` 都会生成 `hook` 对象，其结构如下

```tsx
export type Hook = {|
  memoizedState: any,
  baseState: any,
  baseQueue: Update<any, any> | null,
  queue: UpdateQueue<any, any> | null,
  next: Hook | null,
|};
```

着重关注`memoizedState`和`next`属性，不同 `hooks` 的 `hook` 对象的`memoizedState`保存着不同对象

一般我们会在函数组件中多次使用`hooks`，这会产生多个 `hook` 对象，这些对象通过`next`属性连接形成链表，连接是在挂载时进行的，主要函数是 mountWorkInProgressHook。

挂载时，`hooks` 都会调用该函数生成 `hook` 对象并连接。如果 `workInProgressHook === null`，说明是`hook`链中的第一个，将其赋值给`currentlyRenderingFiber.memoizedState`并更新`workInProgressHook`，这说明函数组件的Fiber的`memoizedState`保存着第一个`hook`的引用。当`workInProgressHook !== null`，则将新生成的 `hook` 赋值给上个`hook`的`next`属性并更新`workInProgressHook`。

正确使用hooks时，遍历hook链，复用hook上次更新的hook，没有问题

```javascript
function FunComponent(props) {
    if (props.condition) {
        useEffect()
    }
    const [counter, setCounter] = useState(0)
    const memo = useMemo()
}
```

假设第一次更新时`props.condition === true`，那么 hook链是这样的：`useEffect hook` => `useState hook` =>`useMemo hook`。

第二次更新时`props.condition === false`，我们走下更新过程。

`useState`首先执行，它会调用`updateWorkInProgressHook` 函数，`currentHook`为上次更新的`hook`链的第一个`hook`，也就是 `useEffect hook`，然后复用该`hook`属性得到新的`hook`并 return 给 `useState`使用，`useState` 再 return `hook`对象的`memoizedState`，但是此时的`hook`对象的`memoizedState`不是数字而是`effect`对象，`counter`从数字变成了对象，渲染或利用`counter`计算时肯定会报错的。

## 3. type 和 interface 的区别

https://juejin.cn/post/7072945053936648200

## 4. html-jsx语法转换

https://transform.tools/html-to-jsx

## 5. 默认值

默认值仅在缺少 `size` prop 或 `size={undefined}` 时生效。 但是如果你传递了 `size={null}` 或 `size={0}`，默认值将 **不** 被使用。

## 6. 保持组件纯粹

React 的渲染过程必须自始至终是纯粹的。组件应该只 **返回** 它们的 JSX，而不 **改变** 在渲染前，就已存在的任何对象或变量 — 这将会使它们变得不纯粹！

## 7. 渲染和提交

- 在一个 React 应用中一次屏幕更新都会发生以下三个步骤：

1. **触发** 一次渲染
2. **渲染** 组件
3. **提交** 到 DOM

- 您可以使用严格模式去找到组件中的错误
- 如果渲染结果与上次一样，那么 React 将不会修改 DOM

## 8. state如同一张快照

“正在渲染” 就意味着 React 正在调用你的组件——一个函数。你从该函数返回的 JSX 就像是 UI 的一张及时的快照。它的 props、事件处理函数和内部变量都是 **根据当前渲染时的 state** 被计算出来的。

**设置 state 只会为下一次渲染变更 state 的值！！！**

**一个 state 变量的值永远不会在一次渲染的内部发生变化，** 即使其事件处理函数的代码是异步的。

## 9. 把一系列 state 更新加入队列

重要：https://react.docschina.org/learn/queueing-a-series-of-state-updates（官网教程）

## 10. 对state进行保留和预制

以下是为什么你不应该把组件函数的定义嵌套起来的原因。

示例中， `MyTextField` 组件被定义在 `MyComponent` **内部**：

```jsx
import { useState } from 'react';

export default function MyComponent() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState('');

    return (
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    );
  }

  return (
    <>
      <MyTextField />
      <button onClick={() => {
        setCounter(counter + 1)
      }}>点击了 {counter} 次</button>
    </>
  );
}

```

每次你点击按钮，输入框的 state 都会消失！这是因为每次 `MyComponent` 渲染时都会创建一个 **不同** 的 `MyTextField` 函数。你在相同位置渲染的是 **不同** 的组件，所以 React 将其下所有的 state 都重置了。这样会导致 bug 以及性能问题。为了避免这个问题， **永远要将组件定义在最上层并且不要把它们的定义嵌套起来。**

## 11. 使用context深层传递参数

https://react.docschina.org/learn/passing-data-deeply-with-context

## 12. React深入（应急方案）

https://react.docschina.org/learn/escape-hatches

## 13. Hooks

https://react.docschina.org/reference/react
