(window.webpackJsonp=window.webpackJsonp||[]).push([[681],{740:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(1),o=n(6),r=(n(0),n(807)),a={title:"Usage with MongoDB"},c={unversionedId:"usage-with-mongo",id:"version-2.7/usage-with-mongo",isDocsHomePage:!1,title:"Usage with MongoDB",description:"To use mikro-orm with mongo database, do not forget to install mongodb dependency. As MongoDriver",source:"@site/versioned_docs/version-2.7/usage-with-mongo.md",slug:"/usage-with-mongo",permalink:"/docs/2.7/usage-with-mongo",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/usage-with-mongo.md",version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1604284031,sidebar:"version-2.7/docs",previous:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",permalink:"/docs/2.7/usage-with-sql"},next:{title:"Using MikroORM with NestJS framework",permalink:"/docs/2.7/usage-with-nestjs"}},s=[{value:"Defining entity",id:"defining-entity",children:[]},{value:"ObjectID and string id duality",id:"objectid-and-string-id-duality",children:[]},{value:"ManyToMany collections with inlined pivot array",id:"manytomany-collections-with-inlined-pivot-array",children:[]},{value:"Native collection methods",id:"native-collection-methods",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To use ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm")," with mongo database, do not forget to install ",Object(r.b)("inlineCode",{parentName:"p"},"mongodb")," dependency. As ",Object(r.b)("inlineCode",{parentName:"p"},"MongoDriver"),"\nis the default one, you do not need to provide it."),Object(r.b)("p",null,"Then call ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  dbName: 'my-db-name',\n  clientUrl: '...',\n});\n")),Object(r.b)("h2",{id:"defining-entity"},"Defining entity"),Object(r.b)("p",null,"When defining entity, do not forget to define primary key like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"@PrimaryKey()\n_id: ObjectID;\n")),Object(r.b)("h2",{id:"objectid-and-string-id-duality"},"ObjectID and string id duality"),Object(r.b)("p",null,"Every entity has both ",Object(r.b)("inlineCode",{parentName:"p"},"ObjectID")," and ",Object(r.b)("inlineCode",{parentName:"p"},"string")," id available, also all methods of ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"EntityRepository")," supports querying by both of them. "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const author = orm.em.getReference('...id...');\nconsole.log(author.id);  // returns '...id...'\nconsole.log(author._id); // returns ObjectID('...id...')\n\n// all of those will return the same results\nconst article = '...article id...'; // string id\nconst book = '...book id...'; // string id\nconst repo = orm.em.getRepository(Author);\nconst foo1 = await repo.find({ id: { $in: [article] }, favouriteBook: book });\nconst bar1 = await repo.find({ id: { $in: [new ObjectID(article)] }, favouriteBook: new ObjectID(book) });\nconst foo2 = await repo.find({ _id: { $in: [article] }, favouriteBook: book });\nconst bar2 = await repo.find({ _id: { $in: [new ObjectID(article)] }, favouriteBook: new ObjectID(book) });\n")),Object(r.b)("h2",{id:"manytomany-collections-with-inlined-pivot-array"},"ManyToMany collections with inlined pivot array"),Object(r.b)("p",null,"As opposed to SQL drivers that use pivot tables, in mongo we can leverage available array type\nto store array of collection items (identifiers). This approach has two main benefits:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Collection is stored on owning side entity, so we know how many items are there even before\ninitializing the collection."),Object(r.b)("li",{parentName:"ol"},"As there are no pivot tables, resulting database queries are much simpler.")),Object(r.b)("h2",{id:"native-collection-methods"},"Native collection methods"),Object(r.b)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",Object(r.b)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"EntityManager.nativeInsert<T extends IEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nEntityManager.nativeUpdate<T extends IEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nEntityManager.nativeDelete<T extends IEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),Object(r.b)("p",null,"Those methods execute native driver methods like Mongo's ",Object(r.b)("inlineCode",{parentName:"p"},"insertOne/updateMany/deleteMany")," collection methods respectively.\nThis is common interface for all drivers, so for MySQL driver, it will fire native SQL queries.\nKeep in mind that they do not hydrate results to entities, and they do not trigger lifecycle hooks. "),Object(r.b)("p",null,"They are also available as ",Object(r.b)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),Object(r.b)("p",null,"There is also shortcut for calling ",Object(r.b)("inlineCode",{parentName:"p"},"aggregate")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"EntityManager.aggregate(entityName: string, pipeline: any[]): Promise<any[]>;\nEntityRepository.aggregate(pipeline: any[]): Promise<any[]>;\n")),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/2.7/index#table-of-contents"}),"\u2190"," Back to table of contents")))}p.isMDXComponent=!0},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(a,".").concat(u)]||d[u]||b[u]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);