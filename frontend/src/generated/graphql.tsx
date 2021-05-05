import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Customer = {
  __typename?: 'Customer';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['String']>;
};

export type CustomerInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
};

export type Gift = {
  __typename?: 'Gift';
  id?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type GiftInput = {
  id?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type LoginMutationResponse = {
  __typename?: 'LoginMutationResponse';
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};

export type MeQueryResponse = {
  __typename?: 'MeQueryResponse';
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  removeUser?: Maybe<Scalars['String']>;
  createProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  removeProduct?: Maybe<Scalars['String']>;
  createCustomer?: Maybe<Customer>;
  updateCustomer?: Maybe<Customer>;
  removeCustomer?: Maybe<Scalars['String']>;
  createVendor?: Maybe<Vendor>;
  updateVendor?: Maybe<Vendor>;
  removeVendor?: Maybe<Scalars['String']>;
  createOrder?: Maybe<Order>;
  updateOrder?: Maybe<Order>;
  removeOrder?: Maybe<Scalars['String']>;
  createGift?: Maybe<Gift>;
  updateGift?: Maybe<Gift>;
  removeGift?: Maybe<Scalars['String']>;
  checkAuth?: Maybe<Scalars['String']>;
  logout?: Maybe<Scalars['String']>;
  login?: Maybe<LoginMutationResponse>;
  signup?: Maybe<SignupMutationResponse>;
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationCreateProductArgs = {
  product?: Maybe<ProductInput>;
};


export type MutationUpdateProductArgs = {
  product?: Maybe<ProductInput>;
};


export type MutationRemoveProductArgs = {
  id: Scalars['String'];
};


export type MutationCreateCustomerArgs = {
  customer?: Maybe<CustomerInput>;
};


export type MutationUpdateCustomerArgs = {
  customer?: Maybe<CustomerInput>;
};


export type MutationRemoveCustomerArgs = {
  id: Scalars['String'];
};


export type MutationCreateVendorArgs = {
  vendor?: Maybe<VendorInput>;
};


export type MutationUpdateVendorArgs = {
  vendor?: Maybe<VendorInput>;
};


export type MutationRemoveVendorArgs = {
  id: Scalars['String'];
};


export type MutationCreateOrderArgs = {
  order?: Maybe<OrderInput>;
};


export type MutationUpdateOrderArgs = {
  order?: Maybe<OrderInput>;
};


export type MutationRemoveOrderArgs = {
  id: Scalars['String'];
};


export type MutationCreateGiftArgs = {
  gift?: Maybe<GiftInput>;
};


export type MutationUpdateGiftArgs = {
  gift?: Maybe<GiftInput>;
};


export type MutationRemoveGiftArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  authInput?: Maybe<LoginInput>;
};


export type MutationSignupArgs = {
  signupInput?: Maybe<SignupInput>;
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['String']>;
  to_vendor_id?: Maybe<Scalars['String']>;
  from_vendor_id?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type OrderInput = {
  id?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
};

export type ProductInput = {
  name?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  stock?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  product?: Maybe<Product>;
  vendors?: Maybe<Array<Maybe<Vendor>>>;
  vendor?: Maybe<Vendor>;
  orders?: Maybe<Array<Maybe<Order>>>;
  order?: Maybe<Order>;
  gifts?: Maybe<Array<Maybe<Gift>>>;
  gift?: Maybe<Gift>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  customer?: Maybe<Customer>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryVendorArgs = {
  id: Scalars['String'];
};


export type QueryOrderArgs = {
  id: Scalars['String'];
};


export type QueryGiftArgs = {
  id: Scalars['String'];
};


export type QueryCustomerArgs = {
  id: Scalars['String'];
};

export type SignupInput = {
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_confirmation?: Maybe<Scalars['String']>;
};

export type SignupMutationResponse = {
  __typename?: 'SignupMutationResponse';
  user?: Maybe<User>;
  token?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  vendor_id?: Maybe<Scalars['String']>;
};

export type Vendor = {
  __typename?: 'Vendor';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type VendorInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginMutationResponse' }
    & Pick<LoginMutationResponse, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'role'>
    )> }
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_confirmation: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup?: Maybe<(
    { __typename?: 'SignupMutationResponse' }
    & Pick<SignupMutationResponse, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'role'>
    )> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'role'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(authInput: {email: $email, password: $password}) {
    user {
      id
      email
      role
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($email: String!, $role: String, $password: String, $password_confirmation: String!) {
  signup(
    signupInput: {email: $email, role: $role, password: $password, password_confirmation: $password_confirmation}
  ) {
    user {
      id
      email
      role
    }
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      role: // value for 'role'
 *      password: // value for 'password'
 *      password_confirmation: // value for 'password_confirmation'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    role
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;