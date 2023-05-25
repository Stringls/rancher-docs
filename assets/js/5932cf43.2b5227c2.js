"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Rancher AWS Quick Start Guide",description:"Read this step by step Rancher AWS guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached."},o=void 0,l={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/aws",id:"version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws",title:"Rancher AWS Quick Start Guide",description:"Read this step by step Rancher AWS guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.",source:"@site/versioned_docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/aws",permalink:"/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws.md",tags:[],version:"2.6",lastUpdatedAt:1685049700,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{title:"Rancher AWS Quick Start Guide",description:"Read this step by step Rancher AWS guide to quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached."},sidebar:"tutorialSidebar",previous:{title:"Deploying Rancher Server",permalink:"/v2.6/pages-for-subheaders/deploy-rancher-manager"},next:{title:"Rancher AWS Marketplace Quick Start",permalink:"/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example IAM Policy",id:"example-iam-policy",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Result",id:"result",level:5},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Destroying the Environment",id:"destroying-the-environment",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/aws"})),(0,n.kt)("p",null,"The following steps will quickly deploy a Rancher server on AWS in a single-node K3s Kubernetes cluster, with a single-node downstream Kubernetes cluster attached."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Deploying to Amazon AWS will incur charges.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/account/"},"Amazon AWS Account"),": An Amazon AWS Account is required to create resources for deploying Rancher and Kubernetes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html"},"Amazon AWS Access Key"),": Use this link to follow a tutorial to create an Amazon AWS Access Key if you don't have one yet."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"IAM Policy created"),": Defines the permissions an account attached with this policy has."),(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform"),": Used to provision the server and cluster in Amazon AWS.")),(0,n.kt)("h3",{id:"example-iam-policy"},"Example IAM Policy"),(0,n.kt)("p",null,"The AWS module just creates an EC2 KeyPair, an EC2 SecurityGroup and an EC2 instance. A simple policy would be:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "ec2:*",\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," to a folder using ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go into the AWS folder containing the Terraform files by executing ",(0,n.kt)("inlineCode",{parentName:"p"},"cd quickstart/rancher/aws"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rename the ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars.example")," file to ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," and customize the following variables:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"aws_access_key")," - Amazon AWS Access Key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"aws_secret_key")," - Amazon AWS Secret Key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rancher_server_admin_password")," - Admin password for created Rancher server (minimum 12 characters)"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional:")," Modify optional variables within ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),". See the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Quickstart Readme")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart/tree/master/rancher/aws"},"AWS Quickstart Readme")," for more information.\nSuggestions include:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"aws_region")," - Amazon AWS region, choose the closest instead of the default (",(0,n.kt)("inlineCode",{parentName:"li"},"us-east-1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prefix")," - Prefix for all created resources"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"instance_type")," - EC2 instance size used, minimum is ",(0,n.kt)("inlineCode",{parentName:"li"},"t3a.medium")," but ",(0,n.kt)("inlineCode",{parentName:"li"},"t3a.large")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"t3a.xlarge")," could be used if within budget"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"add_windows_node")," - If true, an additional Windows worker node is added to the workload cluster"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To initiate the creation of the environment, run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply --auto-approve"),". Then wait for output similar to the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Apply complete! Resources: 16 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nrancher_node_ip = xx.xx.xx.xx\nrancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io\nworkload_node_ip = yy.yy.yy.yy\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher_server_url")," from the output above into the browser. Log in when prompted (default username is ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),", use the password set in ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher_server_admin_password"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ssh to the Rancher Server using the ",(0,n.kt)("inlineCode",{parentName:"p"},"id_rsa")," key generated in ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/aws"),"."))),(0,n.kt)("h5",{id:"result"},"Result"),(0,n.kt)("p",null,"Two Kubernetes clusters are deployed into your AWS account, one running Rancher Server and the other ready for experimentation deployments. Please note that while this setup is a great way to explore Rancher functionality, a production setup should follow our high availability setup guidelines. SSH keys for the VMs are auto-generated and stored in the module directory."),(0,n.kt)("h2",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."),(0,n.kt)("h2",{id:"destroying-the-environment"},"Destroying the Environment"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/aws")," folder, execute ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform destroy --auto-approve"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait for confirmation that all resources have been destroyed."))))}d.isMDXComponent=!0}}]);