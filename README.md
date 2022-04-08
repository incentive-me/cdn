# cdn

# Macete para listar todas as variáveis disponíveis no form customizado do Gravitee
<table>
    <tr th:each="var : ${#vars.getVariableNames()}">
        <td th:text="${var}"></td>
        <td th:text="${#vars.getVariable(var)}"></td>
    </tr>
    <!-- 
        Adding these manually because they are considered special.
        see https://github.com/thymeleaf/thymeleaf/blob/thymeleaf-3.0.3.RELEASE/src/main/java/org/thymeleaf/context/WebEngineContext.java#L199
    -->
    <tr>
        <td>param</td>
        <td th:text="${#vars.getVariable('param')}"></td>
    </tr>
    <tr>
        <td>session</td>
        <td th:text="${#vars.getVariable('session')}"></td>
    </tr>
    <tr>
        <td>application</td>
        <td th:text="${#vars.getVariable('application')}"></td>
    </tr>
</table>

# exemplo de resposta

socialProviders	[io.gravitee.am.model.IdentityProvider@3ffc2e0e, io.gravitee.am.model.IdentityProvider@ad8fbf57, io.gravitee.am.model.IdentityProvider@a9e2af7b, io.gravitee.am.model.IdentityProvider@68675b5c]
request	io.gravitee.am.gateway.handler.context.EvaluableRequest@66f426cd
identifierFirstLoginEnabled	false
X-XSRF-TOKEN	emo5G8r/WoUQzDE0aUVcvJpEauFTtzCytcXVMSYg9SU=.1633439240126.tfYdaq/qUapq/SnzfGyIyvIgIYgVmEWrHsYHBdsQT5Q=
error	
authFlowContext	io.gravitee.am.model.AuthenticationFlowContext@c921d433
passwordlessAction	https://accounts.incentive.me/main/webauthn/login?client_id=80eda629-6a81-434f-ada6-296a81e34ff4&redirect_uri=https%3A%2F%2Fstudio.incentive.me&response_type=code&scope=openid&state=472181c6135947e68135f5eb5ba50f5a&code_challenge=-RuHwkABT37ZoaVxAN5oCFPPa4I-Gv9qoRs2gelJdI0&code_challenge_method=S256&response_mode=query
allowForgotPassword	true
registerAction	https://accounts.incentive.me/main/register?client_id=80eda629-6a81-434f-ada6-296a81e34ff4&redirect_uri=https%3A%2F%2Fstudio.incentive.me&response_type=code&scope=openid&state=472181c6135947e68135f5eb5ba50f5a&code_challenge=-RuHwkABT37ZoaVxAN5oCFPPa4I-Gv9qoRs2gelJdI0&code_challenge_method=S256&response_mode=query
param	{error_description=null, scope=openid, response_type=code, redirect_uri=https://studio.incentive.me, state=472181c6135947e68135f5eb5ba50f5a, code_challenge_method=S256, error=null, client_id=80eda629-6a81-434f-ada6-296a81e34ff4, code_challenge=-RuHwkABT37ZoaVxAN5oCFPPa4I-Gv9qoRs2gelJdI0, response_mode=query}
error_description	
client	io.gravitee.am.gateway.handler.context.provider.ClientProperties@75b8f0f9
action	https://accounts.incentive.me/main/login?client_id=80eda629-6a81-434f-ada6-296a81e34ff4&redirect_uri=https%3A%2F%2Fstudio.incentive.me&response_type=code&scope=openid&state=472181c6135947e68135f5eb5ba50f5a&code_challenge=-RuHwkABT37ZoaVxAN5oCFPPa4I-Gv9qoRs2gelJdI0&code_challenge_method=S256&response_mode=query
forgotPasswordAction	https://accounts.incentive.me/main/forgotPassword?client_id=80eda629-6a81-434f-ada6-296a81e34ff4&redirect_uri=https%3A%2F%2Fstudio.incentive.me&response_type=code&scope=openid&state=472181c6135947e68135f5eb5ba50f5a&code_challenge=-RuHwkABT37ZoaVxAN5oCFPPa4I-Gv9qoRs2gelJdI0&code_challenge_method=S256&response_mode=query
contextPath	/main
_csrf	{parameterName=X-XSRF-TOKEN, token=emo5G8r/WoUQzDE0aUVcvJpEauFTtzCytcXVMSYg9SU=.1633439240126.tfYdaq/qUapq/SnzfGyIyvIgIYgVmEWrHsYHBdsQT5Q=}
authFlow	{}
allowPasswordless	false
hideLoginForm	false
bot_detection_enabled	false
domain	io.gravitee.am.model.Domain@3305b9
authorizeUrls	{a4169dbe-bcf3-4a8a-969d-bebcf3ea8aa3=https://rd.okta.com/oauth2/v1/authorize?client_id=0oa9wtjdosl3iRJ9H357&response_type=code&scope=openid email&state=eyJraWQiOiJkZWZhdWx0LWdyYXZpdGVlLUFNLWtleSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMzg0In0.eyJwIjoiYTQxNjlkYmUtYmNmMy00YThhLTk2OWQtYmViY2YzZWE4YWEzIiwicSI6ImNsaWVudF9pZD04MGVkYTYyOS02YTgxLTQzNGYtYWRhNi0yOTZhODFlMzRmZjQmcmVkaXJlY3RfdXJpPWh0dHBzJTNBJTJGJTJGc3R1ZGlvLmluY2VudGl2ZS5tZSZyZXNwb25zZV90eXBlPWNvZGUmc2NvcGU9b3BlbmlkJnN0YXRlPTQ3MjE4MWM2MTM1OTQ3ZTY4MTM1ZjVlYjViYTUwZjVhJmNvZGVfY2hhbGxlbmdlPS1SdUh3a0FCVDM3Wm9hVnhBTjVvQ0ZQUGE0SS1Hdjlxb1JzMmdlbEpkSTAmY29kZV9jaGFsbGVuZ2VfbWV0aG9kPVMyNTYmcmVzcG9uc2VfbW9kZT1xdWVyeSJ9.Sv3bB6V2ACw9lpDrChyxDbODWmoEceom7SkC5OK9vJzpOwsK9CqpQ3t2gH7OtdDT&redirect_uri=https://accounts.incentive.me/main/login/callback, 82781361-2ebe-427e-b813-612ebe127e56=https://www.facebook.com/v8.0/dialog/oauth?client_id=fgdsf&redirect_uri=https://accounts.incentive.me/main/login/callback&response_type=code&state=eyJraWQiOiJkZWZhdWx0LWdyYXZpdGVlLUFNLWtleSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMzg0In0.eyJwIjoiODI3ODEzNjEtMmViZS00MjdlLWI4MTMtNjEyZWJlMTI3ZTU2IiwicSI6ImNsaWVudF9pZD04MGVkYTYyOS02YTgxLTQzNGYtYWRhNi0yOTZhODFlMzRmZjQmcmVkaXJlY3RfdXJpPWh0dHBzJTNBJTJGJTJGc3R1ZGlvLmluY2VudGl2ZS5tZSZyZXNwb25zZV90eXBlPWNvZGUmc2NvcGU9b3BlbmlkJnN0YXRlPTQ3MjE4MWM2MTM1OTQ3ZTY4MTM1ZjVlYjViYTUwZjVhJmNvZGVfY2hhbGxlbmdlPS1SdUh3a0FCVDM3Wm9hVnhBTjVvQ0ZQUGE0SS1Hdjlxb1JzMmdlbEpkSTAmY29kZV9jaGFsbGVuZ2VfbWV0aG9kPVMyNTYmcmVzcG9uc2VfbW9kZT1xdWVyeSJ9.byQWmom6tSfCG0joJ9MDIiJ92w3rvrjjoIMCWxKAma9alcTNpI1M8ZOqncl-UTqY, d50983b7-1c93-4aa4-8983-b71c932aa4c9=https://www.linkedin.com/oauth/v2/authorization?client_id=tesgsdfg&redirect_uri=https://accounts.incentive.me/main/login/callback&response_type=code&scope=r_emailaddress%20r_liteprofile&state=eyJraWQiOiJkZWZhdWx0LWdyYXZpdGVlLUFNLWtleSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMzg0In0.eyJwIjoiZDUwOTgzYjctMWM5My00YWE0LTg5ODMtYjcxYzkzMmFhNGM5IiwicSI6ImNsaWVudF9pZD04MGVkYTYyOS02YTgxLTQzNGYtYWRhNi0yOTZhODFlMzRmZjQmcmVkaXJlY3RfdXJpPWh0dHBzJTNBJTJGJTJGc3R1ZGlvLmluY2VudGl2ZS5tZSZyZXNwb25zZV90eXBlPWNvZGUmc2NvcGU9b3BlbmlkJnN0YXRlPTQ3MjE4MWM2MTM1OTQ3ZTY4MTM1ZjVlYjViYTUwZjVhJmNvZGVfY2hhbGxlbmdlPS1SdUh3a0FCVDM3Wm9hVnhBTjVvQ0ZQUGE0SS1Hdjlxb1JzMmdlbEpkSTAmY29kZV9jaGFsbGVuZ2VfbWV0aG9kPVMyNTYmcmVzcG9uc2VfbW9kZT1xdWVyeSJ9.uOkVXFkjE5vSmgfd_6qnMfgnhatv1M41DQ27oyVOX9O1LDXKJ_I2Tl0npvcW1KSp, 7b4693e5-0fa3-4e21-8693-e50fa38e21f7=https://accounts.google.com/o/oauth2/v2/auth?client_id=4a6ec783-233d-4042-bdd7-18116f0371bb&response_type=code&scope=openid profile email&state=eyJraWQiOiJkZWZhdWx0LWdyYXZpdGVlLUFNLWtleSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMzg0In0.eyJwIjoiN2I0NjkzZTUtMGZhMy00ZTIxLTg2OTMtZTUwZmEzOGUyMWY3IiwicSI6ImNsaWVudF9pZD04MGVkYTYyOS02YTgxLTQzNGYtYWRhNi0yOTZhODFlMzRmZjQmcmVkaXJlY3RfdXJpPWh0dHBzJTNBJTJGJTJGc3R1ZGlvLmluY2VudGl2ZS5tZSZyZXNwb25zZV90eXBlPWNvZGUmc2NvcGU9b3BlbmlkJnN0YXRlPTQ3MjE4MWM2MTM1OTQ3ZTY4MTM1ZjVlYjViYTUwZjVhJmNvZGVfY2hhbGxlbmdlPS1SdUh3a0FCVDM3Wm9hVnhBTjVvQ0ZQUGE0SS1Hdjlxb1JzMmdlbEpkSTAmY29kZV9jaGFsbGVuZ2VfbWV0aG9kPVMyNTYmcmVzcG9uc2VfbW9kZT1xdWVyeSJ9.crzGaRe_oI0GGNzDr3evY6urPQlzEkEGDTZDjgE310yHni8IVTDq9KwlnraM8LdZ&redirect_uri=https://accounts.incentive.me/main/login/callback}
oauth2Providers	[io.gravitee.am.model.IdentityProvider@3ffc2e0e, io.gravitee.am.model.IdentityProvider@ad8fbf57, io.gravitee.am.model.IdentityProvider@a9e2af7b, io.gravitee.am.model.IdentityProvider@68675b5c]
allowRegister	true
backToLoginIdentifierAction	https://accounts.incentive.me/main/login/identifier?client_id=80eda629-6a81-434f-ada6-296a81e34ff4&redirect_uri=https%3A%2F%2Fstudio.incentive.me&response_type=code&scope=openid&state=472181c6135947e68135f5eb5ba50f5a&code_challenge=-RuHwkABT37ZoaVxAN5oCFPPa4I-Gv9qoRs2gelJdI0&code_challenge_method=S256&response_mode=query
param	{error_description=null, scope=openid, response_type=code, redirect_uri=https://studio.incentive.me, state=472181c6135947e68135f5eb5ba50f5a, code_challenge_method=S256, error=null, client_id=80eda629-6a81-434f-ada6-296a81e34ff4, code_challenge=-RuHwkABT37ZoaVxAN5oCFPPa4I-Gv9qoRs2gelJdI0, response_mode=query}
session	
application	