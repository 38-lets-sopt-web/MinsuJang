import { http } from '@apis/core';
import type { SigninRequest, SigninResponse, SignupRequest } from './auth.types';

/**
 * 회원가입 API를 호출합니다.
 *
 * 아이디, 비밀번호, 이름, 이메일, 나이, 파트를 전달해 새 유저를 생성합니다.
 * 성공 시 응답 본문에 data가 없으므로 별도 값을 반환하지 않습니다.
 *
 * @throws {ApiError} 아이디 중복, 유효하지 않은 파트 등 서버 검증 실패 시 발생합니다.
 */
export const signup = async (body: SignupRequest) => {
  await http.post<void>('/api/v1/auth/signup', { json: body });
};

/**
 * 로그인 API를 호출합니다.
 *
 * 아이디와 비밀번호를 전달해 로그인하고, 이후 API 호출에 사용할 userId를 반환합니다.
 *
 * @returns 로그인한 유저의 userId
 * @throws {ApiError} 존재하지 않는 아이디이거나 비밀번호가 일치하지 않을 때 발생합니다.
 */
export const login = async (body: SigninRequest) => {
  const response = await http.post<SigninResponse>('/api/v1/auth/signin', { json: body });

  return response;
};
