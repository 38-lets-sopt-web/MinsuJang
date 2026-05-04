import { http } from '@apis/core';
import type { User, UserListResponse, UserUpdateRequest } from './users.types';

/**
 * 특정 유저의 개인정보를 조회합니다.
 *
 * @param userId 조회할 유저 ID
 * @returns 유저의 아이디, 이름, 이메일, 나이, 파트 정보
 * @throws {ApiError} 존재하지 않는 유저 ID를 조회할 때 발생합니다.
 */
export const getUsers = async (userId: number) => {
  const response = await http.get<User>(`/api/v1/users/${userId}`);

  return response;
};

/**
 * 특정 유저의 개인정보를 수정합니다.
 *
 * @param userId 수정할 유저 ID
 * @param body 변경할 이름, 이메일, 나이
 * @returns 수정된 유저 정보
 * @throws {ApiError} 존재하지 않는 유저 ID이거나 요청 값이 유효하지 않을 때 발생합니다.
 */
export const updateUsers = async (userId: number, body: UserUpdateRequest) => {
  const response = await http.patch<User>(`/api/v1/users/${userId}`, { json: body });

  return response;
};

/**
 * 최근 가입한 유저 목록을 조회합니다.
 *
 * @returns 최근 가입한 유저 20명의 ID, 이름, 파트 목록
 * @throws {ApiError} 서버에서 유저 목록 조회에 실패할 때 발생합니다.
 */
export const getUsersList = async () => {
  const response = await http.get<UserListResponse>('/api/v1/users');

  return response;
};
