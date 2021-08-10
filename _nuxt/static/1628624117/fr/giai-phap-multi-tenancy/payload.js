__NUXT_JSONP__("/fr/giai-phap-multi-tenancy", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:[{post:{slug:i,title:"Giải pháp multi-tenancy",publishedAt:"2021-08-11 1:26",authors:[{name:"giaosucan",avatarUrl:"https:\u002F\u002Fwww.blogger.com\u002Fimg\u002Favatar_blue_m_96.png",link:o}],tags:["Multi tenancy","Architecture"],private:false,source_post:o,toc:[{id:p,depth:q,text:r},{id:s,depth:q,text:t}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:"Multi tenant là gì? Tổng quan về Multi tenancy như thế nào?",src:"https:\u002F\u002Flh3.googleusercontent.com\u002FkggiZzIPZW3Tc5VRTzxNARbUi2-wNPB1eFH9N0t_uK9LEvrWT87pDusNcKdj74BNn1O-ozAsblig78eanRmtwYr4Ffc4HMoNN1jQszsV6ZlTKDtukH6AYgIzm2BC7OXgtUs48rU=w400-h234"},children:[]}]},{type:a,value:c},{type:b,tag:u,props:{id:p},children:[{type:b,tag:g,props:{href:"#1b%C3%A0i-to%C3%A1n",ariaHidden:v,tabIndex:w},children:[{type:b,tag:x,props:{className:[y,z]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"XXX là một startup mới nổi ở Sillicon Valley. Sản phẩm của công ty được nhiều doanh nghiệp ưu chuộng nhờ khả năng bảo mật cao. Ban đầu công ty vẫn cung cấp sản phẩm theo cách truyền thống. Tức là khi có một khách hàng mới, gọi là 1 tenant, đội SRE sẽ provison một infra structure trên cloud AWS bao gồm (VPC, Server EC2, EBS, Database …) cho riêng khách hàng đó, rồi deploy ứng dụng lên infra đó. Mỗi tenant được launch sẽ có domain riêng kiểu như (tenant1.xxx.com, tenant2.xxx.com), một db riêng và một instance của software. Mọi thứ đều hoàn toàn độc lập."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:"Single Tenant vs Multi Tenant: SaaS Architecture | Clickittech",src:"https:\u002F\u002Flh6.googleusercontent.com\u002Fe1yM-ouwcQerTOEO0PJBn8g5NB7g70wdt5eILo6KzOiPNlrPyG16Ku0Q5hTJBRGxl2xR_gH5aRAbTClaTu5DAJB79CC0pHxn3AbZuy8_-EEz2Payg-H9lpViKkq0qsGplU3vJqU"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Tùy vào độ lớn của từng tenants infrastructure sẽ có một số điều chỉnh cho phù hợp. Ví dụ tenant nhỏ, ít user thì sử dụng 1 server all-in-one duy nhất. Tức là application, database, services deploy toàn bộ trong 1 server để giảm cost. Còn tenant lớn, nhiều users, infra phát triển thành cụm cluster server topology, các service như hbase, mongo, elk, sẽ được deploy trên các server riêng đã giảm load cho hệ thống"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:h,src:"https:\u002F\u002Flh5.googleusercontent.com\u002FiCAt5AMBP578pdaAwI591aQAF_JEyaTnKYk4BoN5ywZeGyikY502JD67g25HAjAqk50seTKUkaEU-hXxHTXtREfPdtw_YGl17WP6_c9iOuPl5MH923uLILxYRBt6bBSDD3iPDEU"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Việc provisioning infra được thực hiện hoàn toàn tự động theo 1 flow trong vòng 2 tiếng"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Jira ticket approved 🡪 Jenkins pipeline trigger 🡪 provisioning infra 🡪 deploy app"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cách làm trên cũng có nhiều ưu điểm khi đảm bảo được tính độc lập, security cho từng khách hàng, dễ customize theo yêu cầu của họ.Tuy nhiên, sau một thời gian dài sử dụng, số lượng khách hàng nhiều lên, mô hình single tenant này bộc lộ nhiều nhược điểm"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Tốn chi phí, mỗi một khách hàng on-board là phải deploy một infra riêng biệt. Ước tính một năm chi phí về cloud computing lên tới 3M $"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Khả năng scaling, do infra là fix cứng 1 server hoặc 1 cụm server, khi khách hàng grown up, server bị quá tải. Phải update lại infra"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Effort bảo trì, nhiều khách hàng nhiều infra nên đội ngũ SRE engineer mât rất nhiều effort cho việc maintained, xử lý issue request từ khách hàng cho từng infra khác nhau"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Upgrade application tốn kém khả nhiều thời gian và có downtime, nguyên nhân mỗi khi update application thì phải deploy lại luôn cả phần persistent layer (phần ít khi thay đổi)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{id:s},children:[{type:b,tag:g,props:{href:"#1gi%E1%BA%A3i-ph%C3%A1p",ariaHidden:v,tabIndex:w},children:[{type:b,tag:x,props:{className:[y,z]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Nhận thấy kiến trúc single tenant có nhiều nhược điểm, đội SRE đã quyết định thử nghiệm kiến trúc "},{type:b,tag:g,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FMultitenancy",rel:[k,l,m],target:n},children:[{type:a,value:"multi-tenancy"}]},{type:a,value:" để giảm chi phí. Một project được đặt biệt danh là Kronos để thực hiện"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Các việc cần làm là"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Chuyển đổi toàn bộ phần backend từ monolithic sang kiến trúc microservice, containerized thành docker image để có thể deploy từ server truyền thống sang nền tảng K8S, ECS có khả năng autoscale tốt hơn"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Các service như hbase, mongo, elk chạy ở tầng persistence sẽ được dùng chung cho mọi tenant"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Chuyển đổi infra từ EC2, Cluster sang K8S và ECS"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:h,src:"https:\u002F\u002Flh3.googleusercontent.com\u002FDyN3X_8LzuXoB1k_Fud_2AxAkZUbNIeSnjnd_Pm2L46TLeTNvM39W9n9o75zX7oFFbpw8aRYFdQA2AVYC89s1sQFCDSEIQnZMYyHsbZVbCl3rVXVqE3-eKEls7C-3vzlgGNsKl4"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Phần persistent layer sẽ được deploy lên server EC2 để sử dụng chung cho toàn bộ tenant. Các tenant là nơi đeploy ứng dung các microservice business logic. Microservice được build thành docker và deploy lên ECS nên leverage được khả năng autoscaling."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cách làm này đem lại khá nhiều ưu điểm"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Chi phí đã giảm đi tới 30% do phần persistent layer được chuyển sang dùng chung"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Autoscaling vì đã chuyển từ server truyền thống sang ECS"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Việc upgrade thực hiện nhanh hơn vì mỗi khi upgrade thì chỉ cần upgrade phần microservice trên ECS, các service deploy độc lập nên hạn chế downtime"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Tuy nhiên, một khó khăn mà đội dự án gặp phải đó là phần database."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Vì tenant dùng chung database nên làm sao có thể đảm bảo data của từng tenant phải isolation và security"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Nhiều tenant nên dữ liệu tăng lên rất nhanh, phải autoscaling như thế nào"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Đội dự án quyết định sử dụng "},{type:b,tag:g,props:{href:"https:\u002F\u002Fwww.mongodb.com\u002Fcloud\u002Fatlas\u002Flp\u002Ftry2?utm_source=google&utm_campaign=gs_apac_vietnam_search_core_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624377&gclid=Cj0KCQjw6ZOIBhDdARIsAMf8YyFyaEhT5r95RA-sfCUBHT3bLjkCn8zfG_ohSUyRXUXMowRHD-GGnm8aAl0wEALw_wcB",rel:[k,l,m],target:n},children:[{type:a,value:"mongo atlas"}]},{type:a,value:" Cloud-hosted MongoDB service on AWS thay vì tự deploy trên EC2, do thế mạnh về scaling, auto healing"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:h,src:"https:\u002F\u002Flh5.googleusercontent.com\u002Flh2LlqNdREWX7CrOSgFAXYAZoN8jUOB6rAfiC6TXcPCwThQKNcr3tIm_DGgYFOXeAIWqK5Gxo11io0DCQ30bCJxfMdgGRrhRlFYgnpdJX_OF5MxFg5ERv-51SU3wXdTP_mUSF-w"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Một database "},{type:b,tag:g,props:{href:"https:\u002F\u002Fhelp.cloud66.com\u002Fmaestro\u002Fthe-basics\u002Fabout-maestro.html",rel:[k,l,m],target:n},children:[{type:a,value:"maestro"}]},{type:a,value:" chung được tạo chuyên để quản lý danh sách tenant như id, user, role, và mỗi tenant sẽ có 1 database riêng deploy trong mongo atlas cluster. Mỗi db có credential riêng và rotate 3 tháng một lần, đảm bảo service của tenant A không thể truy cập vào database của tenant B"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:h,src:"https:\u002F\u002Flh5.googleusercontent.com\u002F5uOBtI3fNJOSVa76yLaj_nkKBvn8lYVqCcMX5xu6f-GY6zwMugOV_GzbP6fhrCWW5I6fUlxoEgv8KmvWCc0dXZGClYJvn_LHunwi9JzNYoUAdOBAQj_QA5urXXOBLGrYYdk4_Q4"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sau khi giải pháp multi-tenancy được đưa vào thử nghiệm, kết quả trong 1 năm đạt hiểu quả khá tốt khi cost đã giảm được tới 30%"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bài toán về cost được các lãnh đạo hết sức quan tâm, sau khi kí được deal với GCP, công ty XXX được phía Google offer một mức giá rẻ hơn cho với AWS lên tới 30%, cam kết sử dụng dịch vụ trong vòng 5 năm."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Một bài toán đặt ra đối với đội SRE, cần migrate toàn bộ infra hiện tại trên AWS sang GCP."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Đó đọc các phần tiếp theo"}]}]},dir:"\u002F2021\u002Fviblo",path:"\u002F2021\u002Fviblo\u002Fgiai-phap-multi-tenancy",extension:".md",createdAt:"2021-08-10T18:26:11.026Z",updatedAt:"2021-08-10T18:30:18.923Z",readingTime:{text:"5 min read",minutes:4.315,time:258900,words:863},locale:"vi",slugWithoutLocale:i},slug:i,prev:A,next:A}],fetch:{},mutations:void 0}}("text","element","\n","p","li","img","a","","giai-phap-multi-tenancy","ul","nofollow","noopener","noreferrer","_blank","https:\u002F\u002Fwww.giaosucan.com\u002F2021\u002F08\u002Fgiai-phap-multi-tenancy.html","1bài-toán",3,"1.Bài toán","1giải-pháp","1.Giải pháp","h3","true",-1,"span","icon","icon-link",null)));