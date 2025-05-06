// import { useState, useEffect, useCallback } from 'react';
// import axios, {
//     AxiosInstance,
//     AxiosRequestConfig,
//     AxiosResponse,
//     AxiosError
// } from 'axios';
//
// /**
//  * Hook options interface
//  */
// interface UseAxiosOptions {
//     baseURL?: string;
//     headers?: Record<string, string>;
//     timeout?: number;
//     withCredentials?: boolean;
// }
//
// /**
//  * Hook state interface
//  */
// interface AxiosState<T = any> {
//     data: T | null;
//     loading: boolean;
//     error: string | null;
//     statusCode: number | null;
// }
//
// interface PaginatedResponse<T = any> {
//     count: number;
//     next: string | null;
//     previous: string | null;
//     results: T[];
// }
//
// /**
//  * Hook return interface
//  */
// interface UseAxiosReturn<T = any> extends AxiosState<T> {
//     list: (url: string, params?: any, config?: AxiosRequestConfig) => Promise<PaginatedResponse<T>>;
//     get: <R = T>(url: string, params?: any, config?: AxiosRequestConfig) => Promise<R>;
//     post: <R = T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<R>;
//     put: <R = T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<R>;
//     delete: <R = T>(url: string, config?: AxiosRequestConfig) => Promise<R>;
//     patch: <R = T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<R>;
//     resetState: () => void;
//     axiosInstance: AxiosInstance;
// }
//
// /**
//  * Custom React hook for handling API requests using Axios with TypeScript
//  * @param {UseAxiosOptions} options - Configuration options
//  * @returns {UseAxiosReturn<T>} - API request methods and state
//  */
// const useAxios = <T = any>(options: UseAxiosOptions = {}): UseAxiosReturn<T> => {
//     // Create Axios instance with provided options
//     const axiosInstance: AxiosInstance = axios.create({
//         baseURL: options.baseURL || '',
//         headers: options.headers || { 'Content-Type': 'application/json' },
//         timeout: options.timeout || 30000,
//         withCredentials: options.withCredentials || false,
//     });
//
//     // State for tracking request status, data, and errors
//     const [state, setState] = useState<AxiosState<T>>({
//         data: null,
//         loading: false,
//         error: null,
//         statusCode: null,
//     });
//
//     /**
//      * Reset state to initial values
//      */
//     const resetState = useCallback((): void => {
//         setState({
//             data: null,
//             loading: false,
//             error: null,
//             statusCode: null,
//         });
//     }, []);
//
//     /**
//      * Handle successful response
//      * @param {AxiosResponse} response - Axios response object
//      * @returns {any} - Processed response data
//      */
//     const handleSuccess = useCallback(<R>(response: AxiosResponse<R>): R => {
//         setState({
//             data: response.data as unknown as T,
//             loading: false,
//             error: null,
//             statusCode: response.status,
//         });
//         return response.data;
//     }, []);
//
//     /**
//      * Handle request error
//      * @param {AxiosError} error - Error object
//      * @throws {AxiosError} - Rethrows the error after updating state
//      */
//     const handleError = useCallback((error: AxiosError): never => {
//         const statusCode = error.response ? error.response.status : null;
//         const errorMessage = error.response?.data?.message || error.message;
//
//         setState({
//             data: null,
//             loading: false,
//             error: errorMessage,
//             statusCode,
//         });
//
//         throw error;
//     }, []);
//
//     const requestWrapper = useCallback(
//         async <R>(
//             method: 'get' | 'post' | 'put' | 'delete' | 'patch',
//             url: string,
//             dataOrParams?: any,
//             config: AxiosRequestConfig = {}
//         ): Promise<R> => {
//             setState(prev => ({ ...prev, loading: true, error: null }));
//
//             try {
//                 const response = await axiosInstance.request<R>({
//                     url,
//                     method,
//                     ...(method === 'get' || method === 'delete'
//                         ? { params: dataOrParams }
//                         : { data: dataOrParams }),
//                     ...config,
//                 });
//                 return handleSuccess<R>(response);
//             } catch (error) {
//                 return handleError(error as AxiosError);
//             }
//         },
//         [axiosInstance, handleSuccess, handleError]
//     );
//
//     const list = useCallback(
//         async (
//             url: string,
//             params: Record<string, any> = {},
//             config: AxiosRequestConfig = {}
//         ): Promise<PaginatedResponse<T>> => {
//             return requestWrapper<PaginatedResponse<T>>('get', url, params, config);
//         },
//         [requestWrapper]
//     );
//
//     /**
//      * Make GET request
//      * @param {string} url - Request URL (will be appended to baseURL)
//      * @param {object} params - URL parameters
//      * @param {AxiosRequestConfig} config - Additional Axios config
//      * @returns {Promise<R>} - Promise that resolves with response data
//      */
//     const get = useCallback(async <R = T>(
//         url: string,
//         params: Record<string, any> = {},
//         config: AxiosRequestConfig = {}
//     ): Promise<R> => {
//         setState(prev => ({ ...prev, loading: true, error: null }));
//
//         try {
//             const response = await axiosInstance.get<R>(url, {
//                 ...config,
//                 params
//             });
//             return handleSuccess<R>(response);
//         } catch (error) {
//             return handleError(error as AxiosError);
//         }
//     }, [axiosInstance, handleSuccess, handleError]);
//
//     /**
//      * Make POST request
//      * @param {string} url - Request URL (will be appended to baseURL)
//      * @param {any} data - Request body
//      * @param {AxiosRequestConfig} config - Additional Axios config
//      * @returns {Promise<R>} - Promise that resolves with response data
//      */
//     const post = useCallback(async <R = T>(
//         url: string,
//         data: any = {},
//         config: AxiosRequestConfig = {}
//     ): Promise<R> => {
//         setState(prev => ({ ...prev, loading: true, error: null }));
//
//         try {
//             const response = await axiosInstance.post<R>(url, data, config);
//             return handleSuccess<R>(response);
//         } catch (error) {
//             return handleError(error as AxiosError);
//         }
//     }, [axiosInstance, handleSuccess, handleError]);
//
//     /**
//      * Make PUT request
//      * @param {string} url - Request URL (will be appended to baseURL)
//      * @param {any} data - Request body
//      * @param {AxiosRequestConfig} config - Additional Axios config
//      * @returns {Promise<R>} - Promise that resolves with response data
//      */
//     const put = useCallback(async <R = T>(
//         url: string,
//         data: any = {},
//         config: AxiosRequestConfig = {}
//     ): Promise<R> => {
//         setState(prev => ({ ...prev, loading: true, error: null }));
//
//         try {
//             const response = await axiosInstance.put<R>(url, data, config);
//             return handleSuccess<R>(response);
//         } catch (error) {
//             return handleError(error as AxiosError);
//         }
//     }, [axiosInstance, handleSuccess, handleError]);
//
//     /**
//      * Make DELETE request
//      * @param {string} url - Request URL (will be appended to baseURL)
//      * @param {AxiosRequestConfig} config - Additional Axios config
//      * @returns {Promise<R>} - Promise that resolves with response data
//      */
//     const del = useCallback(async <R = T>(
//         url: string,
//         config: AxiosRequestConfig = {}
//     ): Promise<R> => {
//         setState(prev => ({ ...prev, loading: true, error: null }));
//
//         try {
//             const response = await axiosInstance.delete<R>(url, config);
//             return handleSuccess<R>(response);
//         } catch (error) {
//             return handleError(error as AxiosError);
//         }
//     }, [axiosInstance, handleSuccess, handleError]);
//
//     /**
//      * Make PATCH request
//      * @param {string} url - Request URL (will be appended to baseURL)
//      * @param {any} data - Request body
//      * @param {AxiosRequestConfig} config - Additional Axios config
//      * @returns {Promise<R>} - Promise that resolves with response data
//      */
//     const patch = useCallback(async <R = T>(
//         url: string,
//         data: any = {},
//         config: AxiosRequestConfig = {}
//     ): Promise<R> => {
//         setState(prev => ({ ...prev, loading: true, error: null }));
//
//         try {
//             const response = await axiosInstance.patch<R>(url, data, config);
//             return handleSuccess<R>(response);
//         } catch (error) {
//             return handleError(error as AxiosError);
//         }
//     }, [axiosInstance, handleSuccess, handleError]);
//
//     // Add request interceptor for handling tokens, etc.
//     axiosInstance.interceptors.request.use(
//         (config) => {
//             // You can add token logic here
//             // const token = localStorage.getItem('token');
//             // if (token) {
//             //   config.headers.Authorization = `Bearer ${token}`;
//             // }
//             return config;
//         },
//         (error) => {
//             return Promise.reject(error);
//         }
//     );
//
//     // Add response interceptor for handling common responses
//     axiosInstance.interceptors.response.use(
//         (response) => {
//             return response;
//         },
//         (error: AxiosError) => {
//             // Handle specific error codes
//             if (error.response?.status === 401) {
//                 // Handle unauthorized error (e.g., logout user)
//                 // logout();
//             }
//             return Promise.reject(error);
//         }
//     );
//
//     return {
//         ...state,
//         list,
//         get,
//         post,
//         put,
//         delete: del, // 'delete' is a reserved keyword
//         patch,
//         resetState,
//         axiosInstance,
//     };
// };
//
// export default useAxios;
//
// // Usage example:
// //
// // import useAxios from './useAxios';
// //
// // interface User {
// //   id: number;
// //   name: string;
// //   email: string;
// // }
// //
// // const MyComponent = () => {
// //   // Type the hook with your expected response data structure
// //   const api = useAxios<User[]>({
// //     baseURL: 'https://api.example.com',
// //     headers: {
// //       'Content-Type': 'application/json',
// //       'Accept': 'application/json',
// //     },
// //   });
// //
// //   const { data, loading, error } = api;
// //
// //   const fetchData = async () => {
// //     try {
// //       // GET request - response will be typed as User[]
// //       const users = await api.get('/users', { limit: 10 });
// //
// //       // POST request with different return type
// //       const newUser = await api.post<User>('/users', {
// //         name: 'John',
// //         email: 'john@example.com'
// //       });
// //
// //       // PUT request
// //       const updatedUser = await api.put<User>('/users/1', {
// //         name: 'John Updated'
// //       });
// //
// //       // DELETE request
// //       const deletedUser = await api.delete<{ success: boolean }>('/users/1');
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };
// //
// //   useEffect(() => {
// //     fetchData();
// //   }, []);
// //
// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error}</div>;
// //
// //   return (
// //     <div>
// //       {data && (
// //         <ul>
// //           {data.map(user => (
// //             <li key={user.id}>{user.name} - {user.email}</li>
// //           ))}
// //         </ul>
// //       )}
// //       <button onClick={fetchData}>Reload Data</button>
// //     </div>
// //   );
// // };
import { useState, useCallback } from 'react';
import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from 'axios';

// Optional config when creating Axios instance
export interface UseAxiosOptions<T = any> {
    baseURL?: string;
    headers?: Record<string, string>;
    timeout?: number;
    withCredentials?: boolean;
    initialState?: Partial<AxiosState<T>>;
}

// Generic Axios state
export interface AxiosState<T = any> {
    data: T | null;
    loading: boolean;
    error: string | null;
    statusCode: number | null;
}

// Paginated response structure
export interface PaginatedResponse<T = any> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

// Return type for the hook
export interface UseAxiosReturn<T = any> extends AxiosState<T> {
    list: (
        url: string,
        params?: Record<string, any>,
        config?: AxiosRequestConfig
    ) => Promise<T>;
    get: <R = T>(
        url: string,
        params?: Record<string, any>,
        config?: AxiosRequestConfig
    ) => Promise<R>;
    post: <R = T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ) => Promise<R>;
    put: <R = T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ) => Promise<R>;
    delete: <R = T>(
        url: string,
        config?: AxiosRequestConfig
    ) => Promise<R>;
    patch: <R = T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ) => Promise<R>;
    resetState: () => void;
    axiosInstance: AxiosInstance;
}

const useAxios = <T = any>(options: UseAxiosOptions<T> = {}): UseAxiosReturn<T> => {
    const axiosInstance = axios.create({
        baseURL: options.baseURL || '',
        headers: options.headers || { 'Content-Type': 'application/json' },
        timeout: options.timeout || 30000,
        withCredentials: options.withCredentials || false,
    });

    const [state, setState] = useState<AxiosState<T>>({
        data: null,
        loading: false,
        error: null,
        statusCode: null,
        ...options.initialState,
    });

    const resetState = useCallback(() => {
        setState({
            data: null,
            loading: false,
            error: null,
            statusCode: null,
            ...options.initialState,
        });
    }, [options.initialState]);

    const handleSuccess = useCallback(<R>(response: AxiosResponse<R>): R => {
        setState(prev => ({
            ...prev,
            data: response.data as unknown as T,
            loading: false,
            error: null,
            statusCode: response.status,
        }));
        return response.data;
    }, []);

    const handleError = useCallback((error: AxiosError): never => {
        const statusCode = error.response?.status ?? null;
        const errorMessage =
            (error.response?.data as any)?.message || error.message;

        setState({
            data: null,
            loading: false,
            error: errorMessage,
            statusCode,
        });

        throw error;
    }, []);

    const requestWrapper = useCallback(
        async <R>(
            method: 'get' | 'post' | 'put' | 'delete' | 'patch',
            url: string,
            dataOrParams?: any,
            config: AxiosRequestConfig = {}
        ): Promise<R> => {
            setState(prev => ({ ...prev, loading: true, error: null }));

            try {
                const response = await axiosInstance.request<R>({
                    url,
                    method,
                    ...(method === 'get' || method === 'delete'
                        ? { params: dataOrParams }
                        : { data: dataOrParams }),
                    ...config,
                });

                return handleSuccess(response);
            } catch (error) {
                return handleError(error as AxiosError);
            }
        },
        [axiosInstance, handleSuccess, handleError]
    );

    const list = useCallback(
        async (
            url: string,
            params: Record<string, any> = {},
            config: AxiosRequestConfig = {}
        ): Promise<T> => {
            return requestWrapper<T>('get', url, params, config);
        },
        [requestWrapper]
    );

    return {
        ...state,
        list,
        get: (url, params, config) => requestWrapper('get', url, params, config),
        post: (url, data, config) => requestWrapper('post', url, data, config),
        put: (url, data, config) => requestWrapper('put', url, data, config),
        delete: (url, config) => requestWrapper('delete', url, undefined, config),
        patch: (url, data, config) => requestWrapper('patch', url, data, config),
        resetState,
        axiosInstance,
    };
};

export default useAxios;
