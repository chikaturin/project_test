const GRAPHQL_SERVER = 'http://localhost:4000';

export const graphQLRequest = async (payload, options = {}) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    try {
      const res = await fetch(`${GRAPHQL_SERVER}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
          ...options.headers,  // Kết hợp các header tùy chọn
        },
        body: JSON.stringify(payload),
      });

      // Xử lý lỗi HTTP
      if (!res.ok) {
        if (res.status === 403) {
          console.error('Access forbidden: ', res.statusText);
          return null;
        } else {
          const errorText = await res.text();
          throw new Error(`HTTP error! Status: ${res.status}, Message: ${errorText}`);
        }
      }

      const responseData = await res.json();

      // Kiểm tra và xử lý lỗi từ phản hồi GraphQL
      if (responseData.errors) {
        console.error('GraphQL errors: ', responseData.errors);
        throw new Error(responseData.errors.map(e => e.message).join(', '));
      }

      return responseData.data;
    } catch (error) {
      console.error('Error making GraphQL request:', error);
      throw new Error('Lỗi khi thực hiện yêu cầu GraphQL. Vui lòng thử lại sau.');
    }
  }

  console.warn('No access token found');
  return null;
};
