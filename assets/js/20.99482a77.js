(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{171:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"using-shadow-to-package-gradle-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-shadow-to-package-gradle-plugins","aria-hidden":"true"}},[a._v("#")]),a._v(" Using Shadow to Package Gradle Plugins")]),a._v(" "),s("p",[a._v("In some scenarios, writing a Gradle plugin can be problematic because your plugin may depend on a version that\nconflicts with the same dependency provided by the Gradle runtime. If this is the case, then you can utilize Shadow\nto relocate your dependencies to a different package name to avoid the collision.")]),a._v(" "),s("p",[a._v("Configuring the relocation has always been possible, but the build author is required to know all the package names\nbefore hand. Shadow v2.0 corrects this by introducing a new task type "),s("code",[a._v("ConfigureShadowRelocation")]),a._v(".\nTasks of this type are configured to target an instance of a "),s("code",[a._v("ShadowJar")]),a._v(" task and run immediately before it.")]),a._v(" "),s("p",[a._v("The "),s("code",[a._v("ConfigureShadowRelocation")]),a._v(" task, scans the dependencies from the configurations specified on the associated\n"),s("code",[a._v("ShadowJar")]),a._v(" task and collects the package names contained within them. It then configures relocation for these\npackages using the specified "),s("code",[a._v("prefix")]),a._v(" on the associated "),s("code",[a._v("ShadowJar")]),a._v(" task.")]),a._v(" "),s("p",[a._v("While this is useful for developing Gradle plugins, nothing about the "),s("code",[a._v("ConfigureShadowRelocation")]),a._v(" task is tied to\nGradle projects. It can be used for standard Java or Groovy projects.")]),a._v(" "),s("p",[a._v("A simple Gradle plugin can use this feature by applying the "),s("code",[a._v("shadow")]),a._v(" plugin and configuring the relocation task\nto execute before the "),s("code",[a._v("shadowJar")]),a._v(" tasks:")]),a._v(" "),s("div",{staticClass:"language-groovy no-plugins extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[a._v("import")]),a._v(" com"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("github"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("jengelman"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("gradle"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("plugins"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("shadow"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("tasks"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("ConfigureShadowRelocation\n\nplugins "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  id "),s("span",{attrs:{class:"token string"}},[a._v("'com.github.johnrengelman.shadow'")]),a._v(" version "),s("span",{attrs:{class:"token string"}},[a._v("'5.0.0'")]),a._v("\n  id "),s("span",{attrs:{class:"token string"}},[a._v("'java'")]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\ndependencies "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    shadow "),s("span",{attrs:{class:"token function"}},[a._v("localGroovy")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    shadow "),s("span",{attrs:{class:"token function"}},[a._v("gradleApi")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    compile "),s("span",{attrs:{class:"token string"}},[a._v("'org.jdom:jdom2:2.0.6'")]),a._v("\n    compile "),s("span",{attrs:{class:"token string"}},[a._v("'org.ow2.asm:asm:6.0'")]),a._v("\n    compile "),s("span",{attrs:{class:"token string"}},[a._v("'org.ow2.asm:asm-commons:6.0'")]),a._v("\n    compile "),s("span",{attrs:{class:"token string"}},[a._v("'commons-io:commons-io:2.4'")]),a._v("\n    compile "),s("span",{attrs:{class:"token string"}},[a._v("'org.apache.ant:ant:1.9.4'")]),a._v("\n    compile "),s("span",{attrs:{class:"token string"}},[a._v("'org.codehaus.plexus:plexus-utils:2.0.6'")]),a._v("\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\ntask "),s("span",{attrs:{class:"token function"}},[a._v("relocateShadowJar")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("type"),s("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ConfigureShadowRelocation"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    target "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" tasks"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("shadowJar\n"),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\ntasks"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("shadowJar"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("dependsOn tasks"),s("span",{attrs:{class:"token operator"}},[a._v(".")]),a._v("relocateShadowJar\n")])])]),s("p",[a._v("Note that the "),s("code",[a._v("localGroovy()")]),a._v(" and "),s("code",[a._v("gradleApi()")]),a._v(" dependencies are added to the "),s("code",[a._v("shadow")]),a._v(" configuration instead of the\nnormal "),s("code",[a._v("compile")]),a._v(" configuration. These 2 dependencies are provided by Gradle to compile your project but are ultimately\nprovided by the Gradle runtime when executing the plugin. Thus, it is "),s("strong",[a._v("not")]),a._v(" advisable to bundle these dependencies\nwith your plugin.")])])}],!1,null,null,null);e.options.__file="README.md";t.default=e.exports}}]);