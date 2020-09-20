# AB Test Component

This component renders children based on configuration variables stored in the `config.js` file.
To use the config file..

1. Store the name of your site test as key in the `sitetests` object

```
sitetests: {
    THIS_VS_THAT: {
        ...
    }
}
```

2. Add a `description` and `value` to your newly created object. Typically, `CONTROL` & `TEST` are used for the active site test variant values

```
sitetests: {
    THIS_VS_THAT: {
        description: 'This ABTest is testing this or that, variants CONTROL & TEST',
        value: 'TEST'
    }
}
```

That's all we need to do to set up the configuration part. Now we need to set up the component correctly.

3. import the `ABTest` & `ABVariant` components where ever you'd like to conduct a test

```
<ABTest name="THIS_VS_THAT">
    <ABVariant isDefault={true} value="CONTROL">
        control...
    </ABVariant>
    <ABVariant value="TEST">
        test...
    </ABVariant>
</ABTest>
```

The `<ABTest>` component accepts the following props:

- name: the exact name of your site test, should match key in configs. `String`. `Required`.

The `<ABVariant>` component accepts the following props:

- value: the exact value of your variant. `String`. `Required`.
- isDefault: will render is no values exist in site test configs. Should only be applied to one of the children `ABVariant` components. `Boolean`


Peace.