/**
 * @desc
 * @url ^https?:\/\/ccsp\-egmas\.sf\-express\.com\/cx\-app\-base\/base\/app\/messageCenter\/queryMessageCenterList
 * @date 2021-09-22
 */

let body = JSON.parse($response.body)

body.obj = []

body = JSON.stringify(body)

$done({
  body
})
