(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{340:function(t,s,a){t.exports=a.p+"assets/img/forest_with_zoom.a43286ea.png"},341:function(t,s,a){t.exports=a.p+"assets/img/forest_fixed.a77f70f6.png"},383:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"the-depth-buffer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-depth-buffer"}},[t._v("#")]),t._v(" The Depth Buffer")]),t._v(" "),e("p",[t._v("Let's take a closer look at the last example.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(340),alt:"forest_with_zoom.png"}})]),t._v(" "),e("p",[t._v("Models that should be in the back are getting rendered ahead of ones that should be in the front. This is caused by the draw order. By default, pixel data from a new object will replace old pixel data.")]),t._v(" "),e("p",[t._v("There are two ways to solve this: sort the data from back to front, use what's known as a depth buffer.")]),t._v(" "),e("h2",{attrs:{id:"sorting-from-back-to-front"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sorting-from-back-to-front"}},[t._v("#")]),t._v(" Sorting from back to front")]),t._v(" "),e("p",[t._v("This is the go to method for 2d rendering as it's pretty easier to know what's supposed to go in front of what. You can just use the z order. In 3d rendering it gets a little more tricky because the order of the objects changes based on the camera angle.")]),t._v(" "),e("p",[t._v("A simple way of doing this is to sort all the objects by their distance to the cameras position. There are flaws with this method though as when a large object is behind a small object, parts of the large object that should be in front of the small object will be rendered behind. We'll also run into issues with objects that that overlap "),e("em",[t._v("themselves")]),t._v(".")]),t._v(" "),e("p",[t._v("If want to do this properly we need to have pixel level precision. That's where a "),e("em",[t._v("depth buffer")]),t._v(" comes in.")]),t._v(" "),e("h2",{attrs:{id:"a-pixels-depth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-pixels-depth"}},[t._v("#")]),t._v(" A pixels depth")]),t._v(" "),e("p",[t._v("A depth buffer is a black and white texture that stores the z-coordinate of rendered pixels. Wgpu can use this when drawing new pixels to determine whether to replace the data or keep it. This technique is called depth testing. This will fix our draw order problem without needing us to sort our objects!")]),t._v(" "),e("p",[t._v("Let's make a function to create the depth texture in "),e("code",[t._v("texture.rs")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" Texture "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" DEPTH_FORMAT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("TextureFormat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("TextureFormat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Depth32Float"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.")]),t._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_depth_texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sc_desc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("SwapChainDescriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" label"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("str"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" size "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Extent3d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.")]),t._v("\n            width"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sc_desc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            height"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sc_desc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            depth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" desc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("TextureDescriptor "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            label"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Some")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("label"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            size"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            array_layer_count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            mip_level_count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            sample_count"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            dimension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("TextureDimension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("D2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            format"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("DEPTH_FORMAT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            usage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("TextureUsage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("OUTPUT_ATTACHMENT "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("TextureUsage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("SAMPLED \n                "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("TextureUsage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("COPY_SRC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" texture "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("desc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" view "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_default_view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sampler "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_sampler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("SamplerDescriptor "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.")]),t._v("\n            address_mode_u"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("AddressMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("ClampToEdge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            address_mode_v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("AddressMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("ClampToEdge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            address_mode_w"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("AddressMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("ClampToEdge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            mag_filter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("FilterMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            min_filter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("FilterMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Nearest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            mipmap_filter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("FilterMode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Nearest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            lod_min_clamp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            lod_max_clamp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            compare"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("CompareFunction"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("LessEqual"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5.")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sampler "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",[e("li",[t._v("We need the DEPTH_FORMAT for when we create the depth stage of the "),e("code",[t._v("render_pipeline")]),t._v(" and creating the depth texture itself.")]),t._v(" "),e("li",[t._v("Our depth texture needs to be the same size as our screen if we want things to render correctly. We can use our "),e("code",[t._v("sc_desc")]),t._v(" to make sure that our depth texture is the same size as our swap chain images.")]),t._v(" "),e("li",[t._v("Since we are rendering to this texture, we need to add the "),e("code",[t._v("OUTPUT_ATTACHMENT")]),t._v(" flag to it.")]),t._v(" "),e("li",[t._v("We technically don't "),e("em",[t._v("need")]),t._v(" a sampler for a depth texture, but our "),e("code",[t._v("Texture")]),t._v(" struct requires it, and we need one if we ever want to render it.")]),t._v(" "),e("li",[t._v("If we do decide to render our depth texture, we need to use "),e("code",[t._v("CompareFunction::LessEqual")]),t._v(". This is due to how the "),e("code",[t._v("samplerShadow")]),t._v(" and "),e("code",[t._v("sampler2DShadow()")]),t._v(" interacts with the "),e("code",[t._v("texture()")]),t._v(" function in GLSL.")])]),t._v(" "),e("p",[t._v("We create our "),e("code",[t._v("depth_texture")]),t._v(" in "),e("code",[t._v("State::new()")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" depth_texture "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_depth_texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("sc_desc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"depth_texture"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("We need to modify our "),e("code",[t._v("render_pipeline")]),t._v(" to allow depth testing.")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" render_pipeline "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_render_pipeline")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("RenderPipelineDescriptor "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    depth_stencil_state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Some")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("DepthStencilStateDescriptor "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        format"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("DEPTH_FORMAT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        depth_write_enabled"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        depth_compare"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("CompareFunction"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Less"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.")]),t._v("\n        stencil_front"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("StencilStateFaceDescriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("IGNORE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.")]),t._v("\n        stencil_back"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("StencilStateFaceDescriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("IGNORE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        stencil_read_mask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        stencil_write_mask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ol",[e("li",[t._v("The "),e("code",[t._v("depth_compare")]),t._v(" function tells us when to discard a new pixel. Using "),e("code",[t._v("LESS")]),t._v(" means pixels will be drawn front to back. Here are all the values you can use.")])]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[repr(C)]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Copy, Clone, Debug, Hash, Eq, PartialEq)]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v('#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" CompareFunction "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Undefined "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Never "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Less "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Equal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    LessEqual "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Greater "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NotEqual "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    GreaterEqual "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Always "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("There's another type of buffer called a stencil buffer. It's common practice to store the stencil buffer and depth buffer in the same texture. This fields control values for stencil testing. Since we aren't using a stencil buffer, we'll just set all these to falsy values. We'll cover stencil buffers "),e("a",{attrs:{href:"../../todo"}},[t._v("later")]),t._v(".")])]),t._v(" "),e("p",[t._v("Don't forget to store the "),e("code",[t._v("depth_texture")]),t._v(" in "),e("code",[t._v("State")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Self")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    depth_texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("We need to remember to change the "),e("code",[t._v("resize()")]),t._v(" method to create a new "),e("code",[t._v("depth_texture")]),t._v(" and "),e("code",[t._v("depth_texture_view")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_size"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" winit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("dpi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("PhysicalSize"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("u32"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depth_texture "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_depth_texture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sc_desc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"depth_texture"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Make sure you update the "),e("code",[t._v("depth_texture")]),t._v(" "),e("em",[t._v("after")]),t._v(" you update "),e("code",[t._v("sc_desc")]),t._v(". If you don't, your program will crash as the "),e("code",[t._v("depth_texture")]),t._v(" will be a different size than the "),e("code",[t._v("swap_chain")]),t._v(" texture.")]),t._v(" "),e("p",[t._v("The last change we need to make is in the "),e("code",[t._v("render()")]),t._v(" function. We've created the "),e("code",[t._v("depth_texture")]),t._v(", but we're not currently using it. We use it by attaching it to the "),e("code",[t._v("depth_stencil_attachment")]),t._v(" of a render pass.")]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" render_pass "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" encoder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin_render_pass")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("RenderPassDescriptor "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// ...")]),t._v("\n    depth_stencil_attachment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Some")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("RenderPassDepthStencilAttachmentDescriptor "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        attachment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("depth_texture"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        depth_load_op"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("LoadOp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Clear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        depth_store_op"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("StoreOp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clear_depth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        stencil_load_op"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("LoadOp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Clear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        stencil_store_op"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" wgpu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("StoreOp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("Store"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clear_stencil"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("And that's all we have to do! No shader code needed! If you run the application, the depth issues will be fixed.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(341),alt:"forest_fixed.png"}})]),t._v(" "),e("h2",{attrs:{id:"challenge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#challenge"}},[t._v("#")]),t._v(" Challenge")]),t._v(" "),e("p",[t._v("Since the depth buffer is a texture, we can sample it in the shader. Because it's a depth texture, we'll have to use the "),e("code",[t._v("samplerShadow")]),t._v(" uniform type and the "),e("code",[t._v("sampler2DShadow")]),t._v(" function instead of "),e("code",[t._v("sampler")]),t._v(", and "),e("code",[t._v("sampler2D")]),t._v(" respectively. Create a bind group for the depth texture (or reuse an existing one), and render it to the screen.")]),t._v(" "),e("AutoGithubLink")],1)}),[],!1,null,null,null);s.default=n.exports}}]);