const employeesUpdate = ({ updateEmployees }) => {
  return async function puts(httpRequest) {
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referer"];
      }
      const toEdit = {
        ...info,
        source,
        id: httpRequest.params.id,
      };
      const patched = await updateEmployees(toEdit);
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { patched },
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = employeesUpdate;
