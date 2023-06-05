"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Provisioning Kubernetes Clusters in Nutanix AOS"},o=void 0,s={unversionedId:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",id:"version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",title:"Provisioning Kubernetes Clusters in Nutanix AOS",description:"To use Rancher to install an RKE Kubernetes cluster in Nutanix AOS (AHV):",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos.md",sourceDirName:"how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix",slug:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",permalink:"/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/nutanix/provision-kubernetes-clusters-in-aos.md",tags:[],version:"2.6",lastUpdatedAt:1685574248,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{title:"Provisioning Kubernetes Clusters in Nutanix AOS"},sidebar:"tutorialSidebar",previous:{title:"Creating a Nutanix AOS Cluster",permalink:"/v2.6/pages-for-subheaders/nutanix"},next:{title:"Behavior Differences Between RKE1 and RKE2",permalink:"/v2.6/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/rke1-vs-rke2-differences"}},l={},u=[{value:"Preparation in Nutanix AOS",id:"preparation-in-nutanix-aos",level:2},{value:"Create Credentials in Nutanix AOS",id:"create-credentials-in-nutanix-aos",level:3},{value:"Network Permissions",id:"network-permissions",level:3},{value:"VM-VM Anti-Affinity Policies",id:"vm-vm-anti-affinity-policies",level:3},{value:"Creating a Nutanix AOS Cluster",id:"creating-a-nutanix-aos-cluster",level:2},{value:"1. Create a node template",id:"1-create-a-node-template",level:3},{value:"2. Create a cluster with node pools using the node template",id:"2-create-a-cluster-with-node-pools-using-the-node-template",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use Rancher to install an ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in Nutanix AOS (AHV):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Locate Rancher's built-in Nutanix ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#activatingdeactivating-node-drivers"},"node driver and activate it"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a node template, which Rancher will use to provision nodes in Nutanix AOS.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a Nutanix AOS cluster in Rancher. When configuring the new cluster, you will define node pools for it. Each node pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install RKE Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the node pool."))),(0,a.kt)("p",null,"For details on configuring the Nutanix AOS node template, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix"},"Nutanix AOS node template configuration reference.")),(0,a.kt)("p",null,"For details on configuring RKE Kubernetes clusters in Rancher, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"cluster configuration reference.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#preparation-in-nutanix-aos"},"Preparation in Nutanix AOS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-a-nutanix-aos-cluster"},"Creating a Nutanix AOS Cluster"))),(0,a.kt)("h2",{id:"preparation-in-nutanix-aos"},"Preparation in Nutanix AOS"),(0,a.kt)("p",null,"The following sections describe the requirements for setting up Nutanix AOS so that Rancher can provision VMs and clusters."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The node templates are documented and tested with Nutanix AOS version 5.20.2 and 6.0.1.")),(0,a.kt)("h3",{id:"create-credentials-in-nutanix-aos"},"Create Credentials in Nutanix AOS"),(0,a.kt)("p",null,"Before proceeding to create a cluster, you must ensure that you have a ",(0,a.kt)("a",{parentName:"p",href:"https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v6_0:wc-user-create-wc-t.html"},"Nutanix Prism Central user account")," with admin permissions. When you set up a node template, the template will need to use these credentials."),(0,a.kt)("h3",{id:"network-permissions"},"Network Permissions"),(0,a.kt)("p",null,"You must ensure that the hosts running the Rancher server are able to establish the following network connections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To the Nutanix Prism Central API (usually port 9440/TCP)."),(0,a.kt)("li",{parentName:"ul"},"To port 22/TCP and 2376/TCP on the created VMs")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"Node Networking Requirements")," for a detailed list of port requirements applicable for creating nodes on an infrastructure provider."),(0,a.kt)("h3",{id:"vm-vm-anti-affinity-policies"},"VM-VM Anti-Affinity Policies"),(0,a.kt)("p",null,"Setting up ",(0,a.kt)("a",{parentName:"p",href:"https://portal.nutanix.com/page/documents/details?targetId=AHV-Admin-Guide-v6_1:ahv-vm-anti-affinity-t.html"},"VM-VM Anti-Affinity Policies")," is recommended. These rules allow VMs assigned the etcd and control-plane roles to operate on separate AHV hosts when they are assigned to different node pools. This practice ensures that the failure of a single physical machine does not affect the availability of those planes."),(0,a.kt)("h2",{id:"creating-a-nutanix-aos-cluster"},"Creating a Nutanix AOS Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-create-a-node-template"},"Create a node template ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-create-a-cluster-with-node-pools-using-the-node-template"},"Create a cluster with node pools using the node template"))),(0,a.kt)("h3",{id:"1-create-a-node-template"},"1. Create a node template"),(0,a.kt)("p",null,"Creating a ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template")," for Nutanix AOS will allow Rancher to provision new nodes in Nutanix AOS. Node templates can be reused for other clusters."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"RKE1 Configuration > Node Templates"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Template"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Nutanix"),"."),(0,a.kt)("li",{parentName:"ol"},"Fill out a node template for Nutanix AOS. For help filling out the form, refer to the Nutanix AOS node template ",(0,a.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix"},"configuration reference."),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("h3",{id:"2-create-a-cluster-with-node-pools-using-the-node-template"},"2. Create a cluster with node pools using the node template"),(0,a.kt)("p",null,"Use Rancher to create a Kubernetes cluster in Nutanix AOS."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Nutanix"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),", then click ",(0,a.kt)("strong",{parentName:"li"},"Continue"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users who can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used, and whether you want to enable project network isolation. To see more cluster options, click on ",(0,a.kt)("strong",{parentName:"li"},"Show advanced options"),". For help configuring the cluster, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,a.kt)("li",{parentName:"ol"},"Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. For more information about node pools, including best practices for assigning Kubernetes roles to the nodes, see ",(0,a.kt)("a",{parentName:"li",href:"/v2.6/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"this section.")),(0,a.kt)("li",{parentName:"ol"},"Review your options to confirm they're correct. Then click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning"),". Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,a.kt)("h2",{id:"optional-next-steps"},"Optional Next Steps"),(0,a.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Access your cluster with the kubectl CLI:")," Follow ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-from-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster."))))}p.isMDXComponent=!0}}]);