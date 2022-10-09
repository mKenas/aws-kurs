const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "leaderboard";
const INDEX_NAME = "spill-score-index";
const SPILL_NAME = "Fortnite";

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (event.routeKey) {
      case "GET /players/{id}":
        body = await getPlayerById(event.pathParameters.id);
        break;

      case "GET /players/top10":
        body = await getTop10();
        break;
      case "PUT /players":
        body = await putPlayer(JSON.parse(event.body));
        break;
      case "DELETE /players/{id}":
        body = await deletePlayer(event.pathParameters.id);
        break;
      default:
        throw new Error(`Ugyldig rute: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};

const getTop10 = async () => {
  const params = {
    TableName: TABLE_NAME,
    IndexName: INDEX_NAME,
    KeyConditionExpression: "spill = :spill",
    ExpressionAttributeValues: {
      ":spill": SPILL_NAME,
    },
    ConsistentRead: false,
    ScanIndexForward: false,
    Limit: 10,
    Select: "ALL_ATTRIBUTES",
  };
  try {
    const response = await dynamodb.query(params).promise();
    console.log(response);
    return response.Items;
  } catch (e) {
    console.log(e);
  }
};

const getPlayerById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  try {
    const response = await dynamodb.get(params).promise();
    console.log(response);
    return response.Item;
  } catch (e) {
    console.log(e);
  }
};

const putPlayer = async (requestJSON) => {
  try {
    const response = await dynamodb
      .put({
        TableName: TABLE_NAME,
        Item: {
          id: requestJSON.id,
          navn: requestJSON.navn,
          spill: requestJSON.spill,
          score: requestJSON.score,
        },
      })
      .promise();
    console.log(response);
    return `Lagt til/ oppdatert spiller med id: ${requestJSON.id}`;
  } catch (e) {
    console.log(e);
  }
};

const deletePlayer = async (id) => {
  try {
    const response = await dynamodb
      .delete({
        TableName: TABLE_NAME,
        Key: {
          id,
        },
      })
      .promise();
    console.log(response);
    return `Slettet spiller med id ${id}`;
  } catch (e) {
    console.log(e);
  }
};
