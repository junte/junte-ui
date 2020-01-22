Layout/Block @ContentChild('footerBlock', {static: false}) was renamed to @ContentChild('blockFooterTemplate', {static: false})

Layout/Aside @ContentChild(TemplateRef, {static: false}) contentTemplate: TemplateRef<any>
was renamed to @ContentChild(TemplateRef, {static: true}) asideContentTemplate: TemplateRef<any>

Layout/Header @ContentChild('topMenu', {static: false}) was renamed to @ContentChild('headerMenuTemplate', {static: false})

Layout/Header @ContentChild('logo', {static: false}) was renamed to @ContentChild('headerLogoTemplate', {static: false})

Layout/Header @ContentChild('userbar', {static: false}) was renamed to @ContentChild('headerUserbarTemplate', {static: false})

Layout/Header @ContentChild('actions', {static: false}) was renamed to @ContentChild('headerActionsTemplate', {static: false})

Layout/Header/Userbar @ContentChild('avatar', {static: false}) was renamed to @ContentChild('userbarAvatarTemplate', {static: false})

Layout/Header/Userbar @ContentChild('userMenu', {static: false}) was renamed to @ContentChild('userbarMenuTemplate', {static: false})

Layout/Header/Action @ContentChild('template', {static: false}) was renamed to @ContentChild('actionLabelTemplate', {static: false})

Layout/Header/Action @ContentChild('content', {static: false}) was renamed to @ContentChild('actionContentTemplate', {static: false})
