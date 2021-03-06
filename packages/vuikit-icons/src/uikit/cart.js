// icon-cart
export default {
  functional: true,
  render: function (h, { props }) {
    let width = props.width || 20
    let height = props.height || 20
    const viewBox = props.viewBox || '0 0 20 20'

    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-cart',
        width: width,
        height: height,
        viewBox: viewBox
      },
      domProps: {
        innerHTML: '<circle cx="7.3" cy="17.3" r="1.4" /><circle cx="13.3" cy="17.3" r="1.4" /><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5" />'
      }
    })
  }
}
