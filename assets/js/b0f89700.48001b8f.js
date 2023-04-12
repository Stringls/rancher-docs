"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[15069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Pod Security Standards (PSS) & Pod Security Admission (PSA)"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards",title:"Pod Security Standards (PSS) & Pod Security Admission (PSA)",description:"Pod Security Standards (PSS) and Pod Security Admission (PSA) define security restrictions for a broad set of workloads.",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/pod-security-standards.md",tags:[],version:"current",lastUpdatedAt:1681173729,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{title:"Pod Security Standards (PSS) & Pod Security Admission (PSA)"},sidebar:"tutorialSidebar",previous:{title:"Pod Security Policies",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},next:{title:"Pod Security Admission (PSA) Configuration Templates",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates"}},l={},p=[{value:"Upgrade to Pod Security Standards (PSS)",id:"upgrade-to-pod-security-standards-pss",level:2},{value:"Removing PodSecurityPolicies from Rancher-Maintained Apps &amp; Marketplace Workloads",id:"remove-psp-rancher-workloads",level:3},{value:"Cleaning Up Releases After a Kubernetes v1.25 Upgrade",id:"cleaning-up-releases-after-a-kubernetes-v125-upgrade",level:3},{value:"Install <code>helm-mapkubeapis</code>",id:"install-helm-mapkubeapis",level:4},{value:"Cleaning Up Broken Releases",id:"cleaning-up-broken-releases",level:4},{value:"Upgrading Charts to a Version That Supports Kubernetes v1.25",id:"upgrading-charts-to-a-version-that-supports-kubernetes-v125",level:4},{value:"Pod Security Admission Configuration Templates",id:"psa-config-templates",level:2},{value:"Rancher on PSA-restricted Clusters",id:"rancher-on-psa-restricted-clusters",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/"},"Pod Security Standards (PSS)")," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"Pod Security Admission (PSA)")," define security restrictions for a broad set of workloads.\nThey became available and were turned on by default in Kubernetes v1.23, and replace ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-policy/"},"Pod Security Policies (PSP)")," in Kubernetes v1.25 and above."),(0,r.kt)("p",null,"PSS define security levels for workloads. PSAs describe requirements for pod security contexts and related fields. PSAs reference PSS levels to define security restrictions."),(0,r.kt)("h2",{id:"upgrade-to-pod-security-standards-pss"},"Upgrade to Pod Security Standards (PSS)"),(0,r.kt)("p",null,"Ensure that you migrate all PSPs to another workload security mechanism. This includes mapping your current PSPs to Pod Security Standards for enforcement with the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/"},"PSA controller"),". If the PSA controller won't meet all of your organization's needs, we recommend that you use a policy engine, such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper"},"OPA Gatekeeper"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.kubewarden.io/"},"Kubewarden"),", ",(0,r.kt)("a",{parentName:"p",href:"https://kyverno.io/"},"Kyverno"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://neuvector.com/"},"NeuVector"),". Refer to the documentation of your policy engine of choice for more information on how to migrate from PSPs."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You must add your new policy enforcement mechanisms ",(0,r.kt)("em",{parentName:"p"},"before")," you remove the PodSecurityPolicy objects. If you don't, you may create an opportunity for privilege escalation attacks within the cluster.")),(0,r.kt)("h3",{id:"remove-psp-rancher-workloads"},"Removing PodSecurityPolicies from Rancher-Maintained Apps & Marketplace Workloads"),(0,r.kt)("p",null,"Rancher v2.7.2 offers a new major version of Rancher-maintained Helm charts. v102.x.y allows you to remove PSPs that were installed with previous versions of the chart. This new version replaces non-standard PSPs switches with the standardized ",(0,r.kt)("inlineCode",{parentName:"p"},"global.cattle.psp.enabled")," switch, which is turned off by default."),(0,r.kt)("p",null,"You must perform the following steps ",(0,r.kt)("em",{parentName:"p"},"while still in Kubernetes v1.24"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the PSA controller to suit your needs. You can use one of Rancher's built-in ",(0,r.kt)("a",{parentName:"p",href:"#psa-config-templates"},"PSA Configuration Templates"),", or create a custom template and apply it to the clusters that you are migrating.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Map your active PSPs to Pod Security Standards:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"See which PSPs are still active in your cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl get pods \\\n  --all-namespaces \\\n  --output jsonpath=\'{.items[*].metadata.annotations.kubernetes\\.io\\/psp}\' \\\n  | tr " " "\\n" | sort -u\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the Kubernetes guide on ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/psp-to-pod-security-standards/"},"Mapping PSPs to Pod Security Standards")," to apply PSSs to your workloads that were relying on PSPs. See ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/migrate-from-psp/"},"Migrate from PodSecurityPolicy to the Built-In PodSecurity Admission controller")," for more details.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To remove PSPs from Rancher charts, upgrade the charts to the latest v102.x.y version ",(0,r.kt)("em",{parentName:"p"},"before")," you upgrade to Kubernetes v1.25. Make sure that the ",(0,r.kt)("strong",{parentName:"p"},"Enable PodSecurityPolicies")," option is ",(0,r.kt)("strong",{parentName:"p"},"disabled"),". This will remove any PSPs that were installed with previous chart versions."))),(0,r.kt)("admonition",{title:"important",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to upgrade your charts to v102.x.y, but don't plan on upgrading your clusters to Kubernetes v1.25 and moving away from PSPs, make sure that you select the option ",(0,r.kt)("strong",{parentName:"p"},"Enable PodSecurityPolicies")," for each chart that you are upgrading.")),(0,r.kt)("h3",{id:"cleaning-up-releases-after-a-kubernetes-v125-upgrade"},"Cleaning Up Releases After a Kubernetes v1.25 Upgrade"),(0,r.kt)("p",null,"If you experience problems while removing PSPs from your charts, or have charts that don't contain a built-in mechanism for removing PSPs, your chart upgrades or deletions might fail with an error message such as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'Error: UPGRADE FAILED: resource mapping not found for name: "<object-name>" namespace: "<object-namespace>" from "": no matches for kind "PodSecurityPolicy" in version "policy/v1beta1"\nensure CRDs are installed first\n')),(0,r.kt)("p",null,"This happens when Helm tries to query the cluster for objects that were stored in a previous release's data blob. To clean up these releases and avoid this error, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm-mapkubeapis")," Helm  plugin. To learn more about ",(0,r.kt)("inlineCode",{parentName:"p"},"helm-mapkubeapis"),", how it works, and how it can be fine-tuned for your use case, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm-mapkubeapis#readme"},"official Helm documentation"),"."),(0,r.kt)("p",null,"Note that Helm plugin installation is local to the machine that you run the commands from. Therefore, make sure that you run both the installation and cleanup from the same machine."),(0,r.kt)("h4",{id:"install-helm-mapkubeapis"},"Install ",(0,r.kt)("inlineCode",{parentName:"h4"},"helm-mapkubeapis")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your terminal in the machine you intend to use ",(0,r.kt)("inlineCode",{parentName:"p"},"helm-mapkubeapis")," from and install the plugin:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm plugin install https://github.com/helm/helm-mapkubeapis\n")),(0,r.kt)("p",{parentName:"li"},"You will see output similar to the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Downloading and installing helm-mapkubeapis v0.4.1 ...\nhttps://github.com/helm/helm-mapkubeapis/releases/download/v0.4.1/helm-mapkubeapis_0.4.1_darwin_amd64.tar.gz\nInstalled plugin: mapkubeapis\n")),(0,r.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm-mapkubeapis")," plugin is at least v0.4.1, as older versions ",(0,r.kt)("em",{parentName:"p"},"do not")," support removal of resources."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify that the plugin was correctly installed:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm mapkubeapis --help\n")),(0,r.kt)("p",{parentName:"li"},"You will see output similar to the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Map release deprecated or removed Kubernetes APIs in-place\n\nUsage:\nmapkubeapis [flags] RELEASE\n\nFlags:\n--dry-run               simulate a command\n-h, --help              help for mapkubeapis\n--kube-context string   name of the kubeconfig context to use\n--kubeconfig string     path to the kubeconfig file\n--mapfile string        path to the API mapping file\n--namespace string      namespace scope of the release\n")))),(0,r.kt)("h4",{id:"cleaning-up-broken-releases"},"Cleaning Up Broken Releases"),(0,r.kt)("p",null,"After you install the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm-mapkubeapis")," plugin, clean up the releases that became broken after the upgrade to Kubernetes v1.25."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your preferred terminal and make sure it's connected to the cluster you wish to target by running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl cluster-info"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List all the releases you have installed in your cluster by running ",(0,r.kt)("inlineCode",{parentName:"p"},"helm list --all-namespaces"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Perform a dry run for each release you would like to clean up by running ",(0,r.kt)("inlineCode",{parentName:"p"},"helm mapkubeapis --dry-run <release-name> --namespace <release-namespace>"),". The result of this command will inform you what resources are going to be replaced or removed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, after reviewing the changes, perform a full run with ",(0,r.kt)("inlineCode",{parentName:"p"},"helm mapkubeapis <release-name> --namespace <release-namespace>"),"."))),(0,r.kt)("h4",{id:"upgrading-charts-to-a-version-that-supports-kubernetes-v125"},"Upgrading Charts to a Version That Supports Kubernetes v1.25"),(0,r.kt)("p",null,"You can proceed with your upgrade once any releases that had lingering PSPs are cleaned up. For Rancher-maintained workloads, follow the steps outlined in the ",(0,r.kt)("a",{parentName:"p",href:"#remove-psp-rancher-workloads"},"Removing PodSecurityPolicies from Rancher-maintained Apps & Marketplace workloads")," section of this document.\nFor workloads not maintained by Rancher, refer to the vendor documentation."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not skip this step. Applications incompatible with Kubernetes v1.25 aren't guaranteed to work after a cleanup.")),(0,r.kt)("h2",{id:"psa-config-templates"},"Pod Security Admission Configuration Templates"),(0,r.kt)("p",null,"Rancher offers PSA configuration templates. These are pre-defined security configurations that you can apply to a cluster. Rancher admins (or those with the right permissions) can ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates"},"create, manage, and edit")," PSA templates."),(0,r.kt)("h3",{id:"rancher-on-psa-restricted-clusters"},"Rancher on PSA-restricted Clusters"),(0,r.kt)("p",null,"Rancher system namespaces are also affected by the restrictive security policies described by PSA templates. You need to exempt Rancher's system namespaces after you assign the template, or else the cluster won't operate correctly. See ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/psa-config-templates#exempting-required-rancher-namespaces"},"Pod Security Admission (PSA) Configuration Templates")," for more details."),(0,r.kt)("p",null,"For a complete file which has all the exemptions you need to run Rancher, please refer to this ",(0,r.kt)("a",{parentName:"p",href:"/reference-guides/rancher-security/psa-restricted-exemptions"},"sample Admission Configuration"),"."))}c.isMDXComponent=!0}}]);