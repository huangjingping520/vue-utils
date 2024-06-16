import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 border border-solid border-blue-400 rounded inline-flex h-10 items-center justify-center  text-blue-400 cursor-pointer hover:bg-blue-400 hover:text-black'],
    ['dis-btn', 'cursor-not-allowed op30 text-black bg-gray-400 hover:bg-gray-400 border-gray-400']
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  safelist: 'prose m-auto text-left'.split(' ')
})
