"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96016],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(r),d=a,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},26387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Continuous Delivery with Fleet"},i=void 0,l={unversionedId:"pages-for-subheaders/fleet-gitops-at-scale",id:"version-2.6/pages-for-subheaders/fleet-gitops-at-scale",title:"Continuous Delivery with Fleet",description:"Continuous Delivery with Fleet is GitOps at scale. Fleet is designed to manage up to a million clusters. It\u2019s also lightweight enough that it works great for a single cluster too, but it really shines when you get to a large scale. By large scale we mean either a lot of clusters, a lot of deployments, or a lot of teams in a single organization.",source:"@site/versioned_docs/version-2.6/pages-for-subheaders/fleet-gitops-at-scale.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/fleet-gitops-at-scale",permalink:"/v2.6/pages-for-subheaders/fleet-gitops-at-scale",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/fleet-gitops-at-scale.md",tags:[],version:"2.6",lastUpdatedAt:1680627802,formattedLastUpdatedAt:"Apr 4, 2023",frontMatter:{title:"Continuous Delivery with Fleet"},sidebar:"tutorialSidebar",previous:{title:"Creating a Custom Benchmark Version for Running a Cluster Scan",permalink:"/v2.6/integrations-in-rancher/cis-scans/custom-benchmark"},next:{title:"Architecture",permalink:"/v2.6/integrations-in-rancher/fleet-gitops-at-scale/architecture"}},s={},p=[{value:"Architecture",id:"architecture",level:2},{value:"Accessing Fleet in the Rancher UI",id:"accessing-fleet-in-the-rancher-ui",level:2},{value:"Windows Support",id:"windows-support",level:2},{value:"GitHub Repository",id:"github-repository",level:2},{value:"Using Fleet Behind a Proxy",id:"using-fleet-behind-a-proxy",level:2},{value:"Helm Chart Dependencies",id:"helm-chart-dependencies",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Documentation",id:"documentation",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Continuous Delivery with Fleet is GitOps at scale. Fleet is designed to manage up to a million clusters. It\u2019s also lightweight enough that it works great for a ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/single-cluster-install/"},"single cluster")," too, but it really shines when you get to a ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/multi-cluster-install/"},"large scale"),". By large scale we mean either a lot of clusters, a lot of deployments, or a lot of teams in a single organization."),(0,a.kt)("p",null,"Fleet is a separate project from Rancher, and can be installed on any Kubernetes cluster with Helm."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"For information about how Fleet works, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/fleet-gitops-at-scale/architecture"},"this page"),"."),(0,a.kt)("h2",{id:"accessing-fleet-in-the-rancher-ui"},"Accessing Fleet in the Rancher UI"),(0,a.kt)("p",null,"Fleet comes preinstalled in Rancher and is managed by the ",(0,a.kt)("strong",{parentName:"p"},"Continuous Delivery")," option in the Rancher UI. For additional information on Continuous Delivery and other Fleet troubleshooting tips, refer ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/troubleshooting/"},"here"),"."),(0,a.kt)("p",null,"Users can leverage continuous delivery to deploy their applications to the Kubernetes clusters in the git repository without any manual operation by following ",(0,a.kt)("strong",{parentName:"p"},"gitops")," practice."),(0,a.kt)("p",null,"Follow the steps below to access Continuous Delivery in the Rancher UI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Continous Delivery"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select your namespace at the top of the menu, noting the following:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By default, ",(0,a.kt)("strong",{parentName:"p"},"fleet-default")," is selected which includes all downstream clusters that are registered through Rancher.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You may switch to ",(0,a.kt)("strong",{parentName:"p"},"fleet-local"),", which only contains the ",(0,a.kt)("strong",{parentName:"p"},"local")," cluster, or you may create your own workspace to which you may assign and move clusters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can then manage clusters by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Clusters")," on the left navigation bar.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Gitrepos")," on the left navigation bar to deploy the gitrepo into your clusters in the current workspace.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select your ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-add/"},"git repository")," and ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-structure/"},"target clusters/cluster group"),". You can also create the cluster group in the UI by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Cluster Groups")," from the left navigation bar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the gitrepo is deployed, you can monitor the application through the Rancher UI."))),(0,a.kt)("h2",{id:"windows-support"},"Windows Support"),(0,a.kt)("p",null,"For details on support for clusters with Windows nodes, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/fleet-gitops-at-scale/windows-support"},"this page"),"."),(0,a.kt)("h2",{id:"github-repository"},"GitHub Repository"),(0,a.kt)("p",null,"The Fleet Helm charts are available ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/fleet/releases/tag/v0.3.10"},"here"),"."),(0,a.kt)("h2",{id:"using-fleet-behind-a-proxy"},"Using Fleet Behind a Proxy"),(0,a.kt)("p",null,"For details on using Fleet behind a proxy, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/fleet-gitops-at-scale/use-fleet-behind-a-proxy"},"this page"),"."),(0,a.kt)("h2",{id:"helm-chart-dependencies"},"Helm Chart Dependencies"),(0,a.kt)("p",null,"In order for Helm charts with dependencies to deploy successfully, you must run a manual command (as listed below), as it is up to the user to fulfill the dependency list. If you do not do this and proceed to clone your repository and run ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install"),", your installation will fail because the dependencies will be missing."),(0,a.kt)("p",null,"The Helm chart in the git repository must include its dependencies in the charts subdirectory. You must either manually run ",(0,a.kt)("inlineCode",{parentName:"p"},"helm dependencies update $chart")," OR run ",(0,a.kt)("inlineCode",{parentName:"p"},"helm dependencies build $chart")," locally, then commit the complete charts directory to your git repository. Note that you will update your commands with the applicable parameters"),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Known Issue"),": clientSecretName and helmSecretName secrets for Fleet gitrepos are not included in the backup nor restore created by the ",(0,a.kt)("a",{parentName:"p",href:"../how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher#1-install-the-rancher-backup-operator"},"backup-restore-operator"),". We will update the community once a permanent solution is in place.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Temporary Workaround"),": By default, user-defined secrets are not backed up in Fleet. It is necessary to recreate secrets if performing a disaster recovery restore or migration of Rancher into a fresh cluster. To modify resourceSet to include extra resources you want to backup, refer to docs ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/backup-restore-operator#user-flow"},"here"),"."))),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"The Fleet documentation is at ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/"},"https://fleet.rancher.io/"),"."))}u.isMDXComponent=!0}}]);