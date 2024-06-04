# element-plus-table-error-repro

This project is used to reproduce examples of errors occurring with `ElTableColumn` in complex scenarios.

Here is the related [Pull Request](https://github.com/element-plus/element-plus/pull/16782).

### Usage

Switching between the `Home` and `Table` pages makes the `Current visited route` include both pages. When staying on the `Home` page and clicking the `clear ...` button, the error occurs.

### Scenario

The core of the scenario is:

1. Using `<KeepAlive>`
2. `<ElTableColumn>` controlled by `v-if` and `v-else` for display (`key` has no effect)
3. The component containing `<ElTableColumn>` is unmounted when **inactive** (e.g., clearing the `include` prop of `<KeepAlive>`)

### Actual Scenario

This reproduction scenario may seem stringent, but it is very likely to occur in actual projects.

For instance, in a multi-tab management system, the `<KeepAlive>` cache of pages is associated with the open tabs. When switching to another tab, the page containing `<ElTableColumn>` becomes inactive. Due to business requirements, two `<ElTableColumn>` components are mutually exclusive, controlled by user attributes in stores. Upon logging out, the system first clears user information and all cached pages (by clearing the `include` prop of `<KeepAlive>`) before redirecting. At this point, an error occurs with `<ElTableColumn>`.

In [this comment](https://github.com/element-plus/element-plus/pull/16782#issuecomment-2146745790), it is mentioned that if two `<ElTableColumn>` components have the same props, the `default` slot should be used. However, during development, it's more likely to control which `<ElTableColumn>` is displayed using `v-if` and `v-else` due to the convenient features provided by `<ElTableColumn>`, such as `show-overflow-tooltip`.