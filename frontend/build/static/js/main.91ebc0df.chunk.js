(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},26:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),o=(a(24),a(2)),s=a(3),m=a(5),i=a(4),u=a(6),f=(a(26),a(11),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={mentors:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",{className:"table table-borderless"},r.a.createElement("td",null," Floaters: "),this.state.mentors.map(function(e){return r.a.createElement("td",{key:e.floaters_events_id},e.floater_fname,e.floater_surname)}))))}}]),t}(r.a.Component)),d=a(9),h=a(12),p=function(e){return e.show?r.a.createElement("div",{className:"alert alert-".concat(e.status),role:"alert"},e.message):""},E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={allmentors:[],message:!1,volunteers:[],message2:!1},a._addFloaterToEvent=function(e){fetch("/api/events-floaters/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({event_id:a.props.event_id,floater_id:e})}).then(function(){a.setState({message:!0}),a.handleUpdate(),setTimeout(function(){return a.setState({message:!1,volunteers:a.state.volunteers})},1e3),a._fetchVolunteers()}).catch(function(e){return console.error(e)})},a._removeFloaterFromEvent=function(e){fetch("/api/events-floaters/"+e,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){a.setState({message2:!0}),a.handleUpdate(),setTimeout(function(){return a.setState({message2:!1,volunteers:a.state.volunteers})},1e3),a._fetchVolunteers()}).catch(function(e){return console.error(e)})},a.handleUpdate=function(){console.log("handle update",Object(h.a)(Object(h.a)(a))),a.setState(function(e,t){return{volunteers:e.volunteers}})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/mentors").then(function(e){return e.json()}).then(function(t){e.setState({allmentors:t})}),this._fetchVolunteers()}},{key:"_fetchVolunteers",value:function(){var e=this;fetch("/api/events-floaters/event/"+this.props.event_id).then(function(e){return e.json()}).then(function(t){e.setState({volunteers:t}),e.handleUpdate()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement(p,{show:this.state.message,status:"success",message:"Floater Has Been Added"}),r.a.createElement(p,{show:this.state.message2,status:"success",message:"You are unvolunteered"}),r.a.createElement("ul",{className:"container list-group mt-4 mb-4"},this.state.allmentors.map(function(t,a){var n=e.state.volunteers.some(function(e){return e.floater_id===t.floater_id});return r.a.createElement("div",{key:a},r.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action",onClick:function(a){a.preventDefault(),n?(e.handleUpdate(),e._removeFloaterFromEvent(t.floater_id)):(e.handleUpdate(),e._addFloaterToEvent(t.floater_id))}},t.floater_fname," ",t.floater_surname,r.a.createElement("span",{className:"btn float-right"},n&&"\u2705")))})),r.a.createElement("p",null,"You not here! ",r.a.createElement("a",{href:"/admin/floaters/addToList"}," ",r.a.createElement("button",{className:"btn btn-outline-primary mr-4 mb-2 "},"Add Yourself to CYF volunteer list"," "))))}}]),t}(r.a.Component),v=(a(13),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"dummyDiv"}),r.a.createElement("div",{className:"fixed-top card headerEvents  mt=0 pt-3 pb-3"},this.props.children))}}]),t}(r.a.Component)),b=a(15),N=a.n(b),g=function(e){return r.a.createElement("span",null,r.a.createElement("h1",null,e.name),r.a.createElement("div",null,"Date: ",N()(e.date).format("Do MMMM  YYYY")))},y=function(e){return r.a.createElement("div",{className:"events"},r.a.createElement(v,null,r.a.createElement("h1",{className:"myHeader ml-5 "},"Events")),e.events.map(function(e,t){return r.a.createElement("div",{className:"event",key:t},r.a.createElement(g,{key:t,name:e.lesson,date:e.date}),r.a.createElement(f,{id:e.event_id}),r.a.createElement(d.a,{trigger:r.a.createElement("button",{type:"button",className:"btn btn-outline-primary mr-4 mb-2 mt-4"},"volunteer"),position:"right center",modal:!0},r.a.createElement(E,{event_id:e.event_id})),r.a.createElement("a",{className:"btn btn-link mr-4 mb-2 mt-4",href:"/event/".concat(e.event_id),alt:e.lesson},"Read more"))}))},_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={message:!1},a.onSubmit=function(e){e.preventDefault();var t={lesson:a.lessonRef.current.value,event_date:a.event_dateRef.current.value,description:a.descriptionRef.current.value};fetch("/api/events",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then(function(e){a.lessonRef.current.value="",a.event_dateRef.current.value="",a.descriptionRef.current.value="",a.setState({message:!0})}).catch(function(e){return console.error(e)})},a.lessonRef=r.a.createRef(),a.event_dateRef=r.a.createRef(),a.descriptionRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement(p,{show:this.state.message,status:"success",message:"New event is added"}),r.a.createElement("h1",{className:"text-center mb-3"},"Add Events"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"event name"},"Event Name"),r.a.createElement("input",{className:"input form-control form-control-lg",placeholder:"Events name",ref:this.lessonRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"event date"},"Events Date"),r.a.createElement("input",{className:"input form-control form-control-lg",placeholder:"Event date",ref:this.event_dateRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"event description"},"Events Description"),r.a.createElement("textarea",{className:"textarea form-control form-control-lg",placeholder:"Description",ref:this.descriptionRef,rows:"8"}),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-toolbar justify-content-between",role:"toolbar"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.onSubmit(t)}},"Submit"),r.a.createElement("a",{className:"btn btn-primary ",href:"/admin/events"},"Back"))))))))}}]),t}(r.a.Component),j=a(37),R=a(38),w=(a(17),function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,null,r.a.createElement("h1",{className:"myHeader ml-5 "},"Admin")),r.a.createElement("div",null,r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("h2",null," ",r.a.createElement("a",{href:"/admin/floaters"},r.a.createElement("li",{className:"nav-item text-center shadow-lg p-3 mb-5 rounded"},"Floaters"))),r.a.createElement("h2",null," ",r.a.createElement("a",{href:"/admin/events"},r.a.createElement("li",{className:"nav-item text-center shadow-lg p-3 mb-5 rounded"},"Events"))))))}),O=function(e){return r.a.createElement("span",null,r.a.createElement("h1",null,e.name),r.a.createElement("p",null,"Description: ",e.description),r.a.createElement("div",null,"Date: ",N()(e.date).format("Do MMMM  YYYY")))},k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={lesson:"",event_date:"",description:"",message:!1},a.onSubmit=function(e){e.preventDefault();var t={lesson:a.lessonRef.current.value,event_date:a.event_dateRef.current.value,description:a.descriptionRef.current.value};fetch("/api/events/"+a.props.id,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"put",body:JSON.stringify(t)}).then(function(){a.lessonRef.current.value="",a.event_dateRef.current.value="",a.descriptionRef.current.value="",a.setState({message:!0}),a.props.history||[].push("/api/events")}).catch(function(e){return console.error(e)})},a.lessonRef=r.a.createRef(),a.event_dateRef=r.a.createRef(),a.descriptionRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement(p,{show:this.state.message,status:"success",message:"Event Has Been Edited"}),r.a.createElement("h1",{className:"text-center mb-3"},"Editing this Event"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"event name"},"Event Name"),r.a.createElement("input",{className:"input form-control form-control-lg",defaultValue:this.props.lesson,ref:this.lessonRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"event date"},"Events Date"),r.a.createElement("input",{className:"input form-control form-control-lg",defaultValue:this.props.event_date,ref:this.event_dateRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"event description"},"Events Description"),r.a.createElement("textarea",{className:"textarea form-control form-control-lg",defaultValue:this.props.description,ref:this.descriptionRef,rows:"8"}),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-toolbar justify-content-between",role:"toolbar"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.onSubmit(t)}},"Submit"),r.a.createElement("a",{className:"btn btn-primary ",href:"/admin/events"},"Back"))))))))}}]),t}(r.a.Component),S=function(e){return r.a.createElement("div",{className:"events"},r.a.createElement(v,null,r.a.createElement("h1",{className:"myHeader ml-5 "},"Events"),r.a.createElement(d.a,{trigger:r.a.createElement("button",{className:"btn btn-outline-primary mb-2 ml-2 sideButton mr-5 "},"add a new event"),position:"right center",modal:!0},r.a.createElement(_,{name:e.name})),r.a.createElement("a",{href:"/admin"},r.a.createElement("button",{className:"btn btn-outline-primary ml-2 mb-2 sideButton"},"Back"))),e.events.map(function(t,a){return r.a.createElement("div",{className:"event",key:a},r.a.createElement(O,{key:a,name:t.lesson,description:t.description,date:t.date,event_id:t.event_id}),r.a.createElement(f,{id:t.event_id}),r.a.createElement(d.a,{trigger:r.a.createElement("button",{type:"button",className:"btn btn-outline-primary mr-4 mb-2 mt-4"},"volunteer"),position:"right center",modal:!0},r.a.createElement(E,{event_id:t.event_id})),r.a.createElement(d.a,{trigger:r.a.createElement("button",{type:"button",className:"btn btn btn-warning mr-4 mb-2 mt-4"},"Edit"),position:"right center",modal:!0},r.a.createElement(k,{name:e.name,lesson:t.lesson,event_date:t.date,description:t.description,id:t.event_id})),r.a.createElement("button",{className:"btn btn-danger  mr-4 mb-2 mt-4",onClick:function(){e.deleteEvent(t.event_id)}},"Delete"))}))},F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={message:!1},a.onSubmit=function(e){e.preventDefault();var t={floater_fname:a.firstNameRef.current.value,floater_surname:a.surnameRef.current.value,floater_email:a.emailRef.current.value};fetch("/api/mentors",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then(function(e){a.firstNameRef.current.value="",a.surnameRef.current.value="",a.emailRef.current.value="",a.setState({message:!0})}).catch(function(e){return console.error(e)}),console.log("error")},a.firstNameRef=r.a.createRef(),a.surnameRef=r.a.createRef(),a.emailRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement(p,{show:this.state.message,status:"success",message:"New floater is added"}),r.a.createElement("h1",{className:"text-center mb-3"},"Add Floaters"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"first name"},"First Name"),r.a.createElement("input",{className:"input form-control form-control-lg",placeholder:"First name",ref:this.firstNameRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"surname"},"Surname"),r.a.createElement("input",{className:"input form-control form-control-lg",placeholder:"Surname",ref:this.surnameRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"email"},"Email"),r.a.createElement("input",{className:"input form-control form-control-lg",placeholder:"email",ref:this.emailRef,type:"email"}),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-toolbar justify-content-between",role:"toolbar"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.onSubmit(t)}},"Submit"),r.a.createElement("a",{className:"btn btn-primary ",href:"/admin/floaters"},"Back"))))))))}}]),t}(r.a.Component),x=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,null,r.a.createElement("h1",{className:"myHeader ml-5"},"Events Calendar")),r.a.createElement("div",null,r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("h2",null,r.a.createElement("a",{href:"/admin"},r.a.createElement("li",{className:"nav-item text-center shadow-lg p-3 mb-5 rounded"},"Admin"))),r.a.createElement("h2",null,r.a.createElement("a",{href:"/events"},r.a.createElement("li",{className:"nav-item text-center shadow-lg p-3 mb-5  rounded"},"Events"))))))},C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={floater_fname:"",floater_surname:"",floater_email:"",message:!1},a.onSubmit=function(e){e.preventDefault();var t={floater_fname:a.floater_fnameRef.current.value,floater_surname:a.floater_surnameRef.current.value,floater_email:a.floater_emailRef.current.value};console.log(a.props.floater_id),fetch("/api/mentors/"+a.props.floater_id,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"put",body:JSON.stringify(t)}).then(function(){a.floater_fnameRef.current.value="",a.floater_surnameRef.current.value="",a.floater_emailRef.current.value="",a.setState({message:!0}),a.props.history.push("/api/mentors"),console.log(a.props)}).catch(function(e){return console.error(e)})},a.floater_fnameRef=r.a.createRef(),a.floater_surnameRef=r.a.createRef(),a.floater_emailRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement(p,{show:this.state.message,status:"success",message:"Floater Has Been Edited"}),r.a.createElement("h1",{className:"text-center mb-3 text-dark"},"Editing this Floater's Details"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold text-dark",htmlFor:"event name"},"First Name"),r.a.createElement("input",{className:"input form-control form-control-lg",defaultValue:this.props.floater_fname,ref:this.floater_fnameRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold text-dark",htmlFor:"event date"},"Surname"),r.a.createElement("input",{className:"input form-control form-control-lg",defaultValue:this.props.floater_surname,ref:this.floater_surnameRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold text-dark",htmlFor:"event description"},"Email"),r.a.createElement("input",{className:"textarea form-control form-control-lg",defaultValue:this.props.floater_email,ref:this.floater_emailRef}),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-toolbar justify-content-between",role:"toolbar"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.onSubmit(t)}},"Submit"),r.a.createElement("a",{className:"btn btn-primary ",href:"/admin/floaters"},"Back"))))))))}}]),t}(r.a.Component),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={mentors:[],message:!1},a._getMentors=function(){fetch("/api/mentors").then(function(e){return e.json()}).then(function(e){a.setState({mentors:e})})},a._deleteFloater=function(e){fetch("/api/mentors/"+e,{method:"delete"}).then(function(e){a.setState({message:!0}),a._getMentors()}).catch(function(e){return console.error(e)})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._getMentors()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement(v,null,r.a.createElement("h1",{className:"myHeader ml-5"},"Code Your Future Floaters"),r.a.createElement(d.a,{trigger:r.a.createElement("button",{className:"btn btn-outline-primary mb-2 ml-2 sideButton mr-5 "},"Add a New Floater"),position:"right center",modal:!0},r.a.createElement(F,null)),r.a.createElement("a",{href:"/admin"},r.a.createElement("button",{className:"btn btn-outline-primary ml-2 mb-2 sideButton"},"Back"))),r.a.createElement(p,{show:this.state.message,status:"success",message:"New floater is deleted"}),r.a.createElement("table",{className:"table table-striped table-dark"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{scope:"col"},"First Name "),r.a.createElement("th",{scope:"col"},"Surname "),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Edit"),r.a.createElement("th",{scope:"col"},"Delete")),this.state.mentors.map(function(t){return r.a.createElement("tr",{key:t.floater_id},r.a.createElement("td",null),r.a.createElement("td",null,t.floater_fname),r.a.createElement("td",null,t.floater_surname),r.a.createElement("td",null,t.floater_email),r.a.createElement("td",null,r.a.createElement(d.a,{trigger:r.a.createElement("button",{type:"button",className:"btn btn-link text-warning linkEdit"},"Edit"),position:"right center",modal:!0},r.a.createElement(C,{floater_fname:t.floater_fname,floater_surname:t.floater_surname,floater_email:t.floater_email,floater_id:t.floater_id}))),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-link text-danger linkDelete",onClick:function(){e._deleteFloater(t.floater_id)}},"Delete")))}))))}}]),t}(r.a.Component),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={event:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/events/".concat(this.props.match.params.id)).then(function(e){return e.json()}).then(function(t){e.setState({event:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"events mt-2"},r.a.createElement(v,null,r.a.createElement("h1",{className:"myHeader ml-5"}," Events")),r.a.createElement("div",{className:"event"},r.a.createElement(O,{name:this.state.event.lesson,description:this.state.event.description,date:this.state.event.date}),r.a.createElement(f,{id:this.props.match.params.id}),r.a.createElement("a",{className:"btn btn-primary ",href:"/events"},"Back")))}}]),t}(r.a.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).state={message:!1},a.onSubmit=function(e){e.preventDefault();var t={floater_fname:a.firstNameRef.current.value,floater_surname:a.surnameRef.current.value,floater_email:a.emailRef.current.value};fetch("/mentors",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then(function(e){a.firstNameRef.current.value="",a.surnameRef.current.value="",a.emailRef.current.value="",a.setState({message:!0})}).catch(function(e){return console.error(e)})},a.firstNameRef=r.a.createRef(),a.surnameRef=r.a.createRef(),a.emailRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-2"},r.a.createElement(p,{show:this.state.message,status:"success",message:"New floater is added"}),r.a.createElement("h1",{className:"text-center mb-3"},"Add Floaters"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"first name"},"First Name"),r.a.createElement("input",{className:"input form-control form-control-lg",placeholder:"First name",ref:this.firstNameRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"surname"},"Surname"),r.a.createElement("input",{className:"input form-control form-control-lg",placeholder:"Surname",ref:this.surnameRef}),r.a.createElement("br",null),r.a.createElement("label",{className:"font-weight-bold",htmlFor:"email"},"Email"),r.a.createElement("input",{className:"input form-control form-control-lg",placeholder:"email",ref:this.emailRef,type:"email"}),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-toolbar justify-content-between",role:"toolbar"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.onSubmit(t)}},"Submit"),r.a.createElement("a",{className:"btn btn-primary ",href:"/events"},"Back"))))))))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={events:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/events").then(function(e){return e.json()}).then(function(t){e.setState({events:t})})}},{key:"toDelete",value:function(e){fetch("/api/events/"+e,{method:"delete"}).then(function(e){500===e.status?alert("Error: Failed to delete event"):window.location.reload()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement(R.a,{exact:!0,path:"/events",render:function(){return r.a.createElement(y,{events:e.state.events})}}),r.a.createElement(R.a,{exact:!0,path:"/",component:x}),r.a.createElement(R.a,{path:"/event/:id",component:A}),r.a.createElement(R.a,{exact:!0,path:"/admin",component:w}),r.a.createElement(R.a,{path:"/admin/events/add",component:_}),r.a.createElement(R.a,{path:"/admin/floaters/add",component:F}),r.a.createElement(R.a,{path:"/admin/floaters/addToList",component:T}),r.a.createElement(R.a,{exact:!0,path:"/admin/events",render:function(){return r.a.createElement(S,{events:e.state.events,deleteEvent:e.toDelete})}}),r.a.createElement(R.a,{exact:!0,path:"/admin/floaters",render:function(){return r.a.createElement(D,null)}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.91ebc0df.chunk.js.map