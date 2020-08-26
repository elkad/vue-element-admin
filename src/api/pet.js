import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/admin/api/pets',
    method: 'get',
    params: query
  })
}
