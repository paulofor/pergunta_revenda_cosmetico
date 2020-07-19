var PagSeguro=window.PagSeguro||{};PagSeguro.DataFortress=new function(){var Connection=new function(){var timeout=15e3;var connection=false;var connFail=function(){};var getConnection=function(){if(!connection&&"object"==typeof window.DataFortress&&"object"==typeof window.DataFortress.Connection){connection=window.DataFortress.Connection}return connection};var check=function(){if(!getConnection()){AppLog.loadConnectionError(timeout);connFail()}};var listen=function(){setTimeout(function(){check()},timeout)};var onResolve=function(callback){window.processDfClient=function(){if("function"==typeof callback){var services=new Services;callback(services)}}};var onFail=function(callback,useDummyServices){connFail=function(){if("function"==typeof callback){if(useDummyServices){var services=new Services;callback(services)}else{callback()}}}};return{listen:listen,getConnection:getConnection,onResolve:onResolve,onFail:onFail}};var getPropValue=function(main,index,type,defaultValue){var main="object"==typeof main?main:{};var defaultValue="undefined"!=typeof defaultValue?defaultValue:false;return Boolean(typeof main[index]==type&&Boolean(main[index]))?main[index]:defaultValue};var PreparedData=new function(){var success=function(response,options,index,value){var data={};if(value){data[index]=response.result[value]}else{data=response}if("function"==typeof options.success){options.success(data)}if("function"==typeof options.complete){options.complete(data)}};var error=function(response,options){var data={};data.error={status:response.status,code:response.code,message:response.message};if(response.time){data.error.time=response.time}if("function"==typeof options.error){options.error(data)}if("function"==typeof options.complete){options.complete(data)}};var checkStatus=function(response,options,index,value){switch(response.status){case"forbidden":AppLog.forbiddenError(options.data,response);error(response,options);break;case"success":success(response,options,index,value);break;default:AppLog.statusError(options.data,response);error(response,options);break}};var defaultData=function(options,index,value,property){property=property||"safeCheckoutResponse";return{data:options.data,callback:function(response){var parsedResponse=getPropValue(response,property,"object");checkStatus(parsedResponse,options,index,value)},error:function(e){AppLog.httpError(options.data,e);error({status:"request_error",code:"20000",message:"request error"},options)}}};var cardData=function(options){if(options.data.creditCard.length<6){AppLog.genericError(options.data,"invalid_bin","invalid bin");error({status:"invalid_bin",code:"20001",message:"invalid bin"},options);return false}options.data.creditCard=String(options.data.creditCard).substring(0,6);if(options.data.hasOwnProperty("internationalMode")){delete options.data.internationalMode}return{data:options.data,callback:function(response){var emulateStatusErrorResponse={status:"bin_not_found",code:"20002",message:"bin not found"};if(response.hasOwnProperty("bin")&&response.bin.hasOwnProperty("brand")){if(Boolean(response.bin.brand)){success(response,options,"cardData",false)}else{AppLog.statusError(options.data,emulateStatusErrorResponse);error(emulateStatusErrorResponse,options)}}else{AppLog.genericError(options.data,"invalid_response","invalid response");error({status:"invalid_response",code:"20003",message:"invalid response"},options)}},error:function(e){AppLog.httpError(options.data,e);error({status:"request_error",code:"20000",message:"request error"},options)}}};return{defaultData:defaultData,cardData:cardData}};var Services=function(){var errorContinue=function(options,error){var response={error:error};if("function"==typeof options.error){options.error(response)}if("function"==typeof options.complete){options.complete(response)}};var scriptError=function(e,options){AppLog.scriptError({message:e.message,origin:options.data.origin,sessionId:options.data.tk});errorContinue(options,{status:"js-error",message:"js error",code:"20004"})};var connectionError=function(options){AppLog.noConnectionError({origin:options.data.origin,sessionId:options.data.tk});errorContinue(options,{status:"noConnection-error",message:"no connection with DF script",code:"20005"})};var service=function(name,params,options){var conn=Connection.getConnection();if(conn){try{if(Boolean(params)){conn[name](params)}}catch(e){scriptError(e,options)}}else{connectionError(options)}};var getDurableToken=function(options){service("getDurableToken",PreparedData.defaultData(options,"durableToken","durableToken"),options)};var getTransientToken=function(options){service("getTransientToken",PreparedData.defaultData(options,"token","token"),options)};var getTransientByDurableToken=function(options){service("getTransientByDurableToken",PreparedData.defaultData(options,"token","token"),options)};var hashLot=function(options){service("hashLot",PreparedData.defaultData(options,"list","listHash","normalizedResponse"),options)};var getCardData=function(options){if(options.data.internationalMode){service("getCardDataPs",PreparedData.cardData(options),options)}else{service("getCardData",PreparedData.cardData(options),options)}};var getCardDataV3=function(options){service("getCardDataV3",PreparedData.cardData(options),options)};return{getCardData:getCardData,getCardDataV3:getCardDataV3,getDurableToken:getDurableToken,getTransientToken:getTransientToken,getTransientByDurableToken:getTransientByDurableToken,hashLot:hashLot}};var AppLog=new function(){var Urls={event:"/checkout/nc/log-event.jhtml",forbidden:"/checkout/nc/waf-event.jhtml"};var requestLog=function(url,params){var tmpImg=new Image;params.userAgent=navigator.userAgent;params.jsversion="v3";tmpImg.src=url+"?"+$.param(params)};this.genericError=function(data,status,message){requestLog(Urls.event,{type:status,message:message,origin:data.origin,sessionId:data.tk})};this.loadConnectionError=function(timeout){requestLog(Urls.event,{type:"loadConnection-error",message:"timeout = "+parseInt(timeout/1e3,10)+" secs"})};this.noConnectionError=function(data){requestLog(Urls.event,{type:"noConnection-error",origin:data.origin,sessionId:data.sessionId})};this.scriptError=function(data){requestLog(Urls.event,{type:"js-error",message:data.message,origin:data.origin,sessionId:data.sessionId})};this.statusError=function(data,response){var sessionId=getPropValue(data,"tk","string");var origin=getPropValue(data,"origin","string");requestLog(Urls.event,{type:"status-error",origin:origin,sessionId:sessionId,status:response.status,code:response.code,message:response.message})};this.httpError=function(data,e){var sessionId=getPropValue(data,"tk","string");var origin=getPropValue(data,"origin","string");var start=getPropValue(e.time,"start","number");var end=getPropValue(e.time,"end","number");var seconds=getPropValue(e.time,"seconds","number");requestLog(Urls.event,{type:"http-error",origin:origin,sessionId:sessionId,start:start,end:end,seconds:seconds,textStatus:e.textStatus,status:e.status,statusText:e.statusText,responseText:e.responseText,url:e.url})};this.forbiddenError=function(data,response){var sessionId=getPropValue(data,"tk","string");var origin=getPropValue(data,"origin","string");var requestId=getPropValue(response,"requestId","string");var logParams={type:"forbidden-error",origin:origin,sessionId:sessionId,requestId:requestId};requestLog(Urls.forbidden,logParams);requestLog(Urls.event,logParams)}};var genericError=function(params,status,message){if("function"==typeof params.error){params.error({error:{status:status,message:message,code:"20006"}})}if("object"==typeof params.data){AppLog.genericError(params.data,status,message)}};var beforeResolve=function(params){genericError(params,"beforeResolve-error","connection not ready")};var serviceError=function(params,jsError){genericError(params,"service-error",jsError.message)};var autoInit=function(){Connection.listen()}();return{onResolve:Connection.onResolve,onFail:Connection.onFail,beforeResolve:beforeResolve,serviceError:serviceError}};