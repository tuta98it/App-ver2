import {Injectable} from '@angular/core';
import {BaseService} from '../shared/services/base.service';
import {Observable} from 'rxjs';
import {UrlConstant} from '../shared/constants/url.class';
// import {Role} from '../model/role.class';
import {Constant} from '../shared/constants/constant.class';

@Injectable()
export class GeneralService extends BaseService {
  //taikhoan
  getTaikhoan(): Observable<any[]> {
    return this.get(UrlConstant.LIST_TAIKHOAN);
  }

  deleteTaikhoan(id: number): Observable<number> {
    return this.delete(UrlConstant.LIST_TAIKHOAN + '/' + id, null);
  }

  addTaikhoan(item: any): any {
    return this.post(UrlConstant.LIST_TAIKHOAN, item);
  }

  updateTaikhoan(item: any): any {
    return this.put(UrlConstant.LIST_TAIKHOAN + '/' + item.id, item, 'text');
  }

  updateUserPassword(item: any): any {
    return this.post(
      UrlConstant.LIST_TAIKHOAN + '/ChangeUserPassword/' + item.id,
      item
    );
  }

  addGroup2User(item: any): any {
    return this.post(UrlConstant.LIST_TAIKHOAN + '/AddGroup2User', item);
  }

  getUserLogin(username, password): Observable<any[]> {
    return this.get(
      '/test/getUserLogin?password=' + password + '&userId=' + username
    );
  }

  getDetailTaikhoan(id: number): Observable<any> {
    return this.get(UrlConstant.LIST_TAIKHOAN + '/' + id, null);
  }

  getAllUser(): Observable<any[]> {
    return this.get('/Login/getAllUsers');
  }

  getUserByRoleId(roleId): Observable<any[]> {
    return this.get(`/Login/GetUserByRole/${roleId}`);
  }

  //upload
  upload(formData: any): Observable<any> {
    return this.post('/file/upload', formData);
  }

  //Role
  getRole(): Observable<any[]> {
    return this.get(UrlConstant.LIST_ROLE);
  }

  //Partners
  getListPartner(): Observable<any[]> {
    return this.get(UrlConstant.LIST_PARTNERS);
  }

  getListRootPartner(): Observable<any[]> {
    return this.get(UrlConstant.LIST_PARTNERS + '/GetRootPartnes');
  }

  getAddPartner(item: any): any {
    return this.post(UrlConstant.LIST_PARTNERS, item);
  }

  addPartnerAccount(item: any): any {
    return this.post(UrlConstant.LIST_ACCOUNTP, item);
  }

  getUpdatePartner(item: any): any {
    return this.put(UrlConstant.LIST_PARTNERS + '/' + item.id, item);
  }

  deletePartner(id: number): any {
    return this.delete(UrlConstant.LIST_PARTNERS + '/' + id, null);
  }

  savePartnerRate(item: any): any {
    return this.post(UrlConstant.LIST_PARTNERS + '/SavePartnerRate', item);
  }

  deletePartnerRate(id): any {
    return this.delete(
      UrlConstant.LIST_PARTNERS + '/DeletePartnerRate/' + id,
      null
    );
  }

  //SalesMan
  getListSalesMan(): Observable<any[]> {
    return this.get(UrlConstant.LIST_SALESMAN);
  }

  getSaleManById(id: any): Observable<any[]> {
    return this.get(UrlConstant.LIST_SALESMAN + '/' + id);
  }

  addSalesMan(item: any): any {
    return this.post(UrlConstant.LIST_SALESMAN, item);
  }

  addSalesManRate(item: any): any {
    return this.post(UrlConstant.LIST_SALESMAN + '/SaveSalesManRate', item);
  }

  updateSalesMan(item: any): any {
    return this.put(UrlConstant.LIST_SALESMAN + '/' + item.id, item);
  }

  deleteSalesMan(id: number): any {
    return this.delete(UrlConstant.LIST_SALESMAN + '/' + id, null);
  }

  saveSalesManRate(item: any): any {
    return this.post(UrlConstant.LIST_SALESMAN + '/SaveSalesManRate', item);
  }

  //Group
  getGroup(): Observable<any[]> {
    return this.get(UrlConstant.LIST_NHOMTAIKHOAN);
  }

  deleteGroup(id: number): Observable<number> {
    return this.delete(UrlConstant.LIST_NHOMTAIKHOAN + '/' + id, null);
  }

  addGroup(item: any): any {
    return this.post(UrlConstant.LIST_NHOMTAIKHOAN, item);
  }

  updateGroup(item: any): any {
    return this.put(
      UrlConstant.LIST_NHOMTAIKHOAN + '/' + item.id,
      item,
      'text'
    );
  }

  getGroupOfUser(userId: any): any {
    return this.get(
      UrlConstant.LIST_NHOMTAIKHOAN + '/GetGroupOfUser/' + userId
    );
  }

  addUserToGroup(item: any): any {
    return this.post(UrlConstant.LIST_NHOMTAIKHOAN + '/AddUser2Group', item);
  }

  removeUserFromGroup(item: any): any {
    return this.post(
      UrlConstant.LIST_NHOMTAIKHOAN + '/RemoveUserFromGroup',
      item
    );
  }

  getUserOfGroup(groupId: any): any {
    return this.get(UrlConstant.LIST_USER + '/GetUserOfGroup/' + groupId);
  }

  updateGroupRole(item: any): any {
    return this.post(UrlConstant.LIST_NHOMTAIKHOAN + '/UpdateGroupRoles', item);
  }

  ///Login/GetInitialData
  getInitialData(): any {
    return this.get('/Login/GetInitialData');
  }

  getSystemConfig(): any {
    return this.get('/SystemConfigs');
  }

  updateSystemConfig(item: any): any {
    return this.put('/SystemConfigs/' + item.id, item, 'text');
  }

  //System config
  saveSignature(item: any): any {
    return this.post(UrlConstant.SYSTEM_CONFIG + '/SaveSignature', item);
  }

  getSignature(): any {
    return this.get(UrlConstant.SYSTEM_CONFIG + '/GetSignature');
  }

  //Banner
  getBanner(): Observable<any[]> {
    return this.get(UrlConstant.LIST_BANNER);
  }

  deleteBanner(id: number): Observable<number> {
    return this.delete(UrlConstant.LIST_BANNER + '/' + id, null);
  }

  addBanner(item: any): any {
    return this.post(UrlConstant.LIST_BANNER, item);
  }

  updateBanner(item: any): any {
    return this.put(UrlConstant.LIST_BANNER + '/' + item.id, item, 'text');
  }

  loginFB(): any {
    return this.post('Account/ExternalLogin', { provider: 'Facebook' });
  }

  //Quan ly an
  ///test/getListUpdateInfo
  getListUpdateInfo(item: any): Observable<any[]> {
    return this.post('/SppCase/getListUpdateInfo', item);
  }

  addBanAn(item: any): any {
    return this.post('/SppCase/insert', item);
  }

  // /dm/LstBorderGuards/getList
  getLstBorderGuards(search: any): Observable<any[]> {
    return this.get('/dm/LstBorderGuards/getList', search);
  }

  getLstBorderGuardsByQuery(keyword: any): Observable<any[]> {
    return this.get('/dm/LstBorderGuards/autocomplete/' + keyword, {
      query: keyword,
    });
  }

  getListCaseLawBySppCase(search: any): any {
    return this.get('/SppCase/getListCaseLaw', search);
  }

  getListRegisterBySppCase(search: any): any {
    return this.get('/SppRegister/getList', search);
  }

  saveRegister(item: any): any {
    return this.post('/SppRegister/save', item);
  }

  //ordertype-profile
  getOrderProfile(): Observable<any[]> {
    return this.get(UrlConstant.LIST_ORDERTYPEPROFILE);
  }

  addOrderTypeProfile(item: any): any {
    return this.post(UrlConstant.LIST_ORDERTYPEPROFILE + '/Add', item);
  }

  profileId(id: number): any {
    return this.get(UrlConstant.LIST_ORDERTYPEPROFILE + '/' + id, id);
  }

  updateOrderTypeProfile(item: any): any {
    return this.put(
      UrlConstant.LIST_ORDERTYPEPROFILE + '/' + item.id,
      item,
      'text'
    );
  }

  deleteOrderTypeProfile(id: number): any {
    return this.delete(UrlConstant.LIST_ORDERTYPEPROFILE + '/' + id, null);
  }

  addOrderTypes(item: any): any {
    return this.post(UrlConstant.LIST_ORDERTYPEPROFILE + '/AddDetail', item);
  }

  removeDetailOrderTypes(item: any): any {
    return this.post(UrlConstant.LIST_ORDERTYPEPROFILE + '/RemoveDetail', item);
  }

  //customer
  getCustomer(id: any): Observable<any> {
    return this.get(UrlConstant.LIST_CUSTOMER + '/' + id, null);
  }

  getCustomers(payload): Observable<any> {
    return this.get(UrlConstant.LIST_CUSTOMER, payload);
  }

  addCustomer(item: any): any {
    return this.post(UrlConstant.LIST_CUSTOMER, item);
  }

  updateCustomer(item: any): any {
    return this.put(UrlConstant.LIST_CUSTOMER + '/' + item.id, item, 'text');
  }

  deleteCustomer(id: number): Observable<number> {
    return this.delete(UrlConstant.LIST_CUSTOMER + '/' + id, null);
  }

  searchCustomer(
    query: any,
    pageNo: number,
    pageSize: number
  ): Observable<any[]> {
    return this.get(
      `${UrlConstant.LIST_CUSTOMER}/query?query=${query}&pageNo=${pageNo}&pageSize=${pageSize}`,
      null
    );
  }

  getCustomerTransactions(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_CUSTOMER + '/CustomerTransactions',
      payload
    );
  }

  // partner
  getPartners(): Observable<any[]> {
    return this.get(UrlConstant.LIST_PARTNER);
  }

  addPartner(item: any): any {
    return this.post(UrlConstant.LIST_PARTNER, item);
  }

  updatePartner(item: any): any {
    return this.put(UrlConstant.LIST_PARTNER + '/' + item.id, item, 'text');
  }

  //releasePoint
  getReleasePoints(): Observable<any[]> {
    return this.get('/ReleasePoints');
  }

  //account
  getAccount(id: number): Observable<number> {
    return this.get(UrlConstant.LIST_ACCOUNT + '/' + id, null);
  }

  getSystemAccount(): Observable<any> {
    return this.get(UrlConstant.LIST_ACCOUNT + '/system');
  }

  getReleasedAccount(): Observable<any> {
    return this.get(UrlConstant.LIST_ACCOUNT + '/released');
  }

  putReleasedPoint(releasedPoint: number, reason: string): any {
    return this.put(
      UrlConstant.LIST_ACCOUNT +
        '/releasedPoint?' +
        'releasedPoint=' +
        releasedPoint +
        '&reason=' +
        reason,
      releasedPoint
    );
  }

  //order
  addOrder(item: any): any {
    return this.post(UrlConstant.LIST_ORDER, item);
  }

  checkPermission(per) {
    const listPermission = new Set();
    const userInfo = JSON.parse(localStorage.getItem(Constant.USER_INFO));
    if (userInfo.roles) {
      // tslint:disable-next-line:prefer-for-of
      for (const role of userInfo.roles) {
        listPermission.add(role);
      }
    }
    return listPermission.has(per);
  }

  //cancel point
  cancelPoint(item: any): any {
    return this.post('/CancelPoints', item);
  }

  //SpecimenType
  getSpecimenType(): Observable<any[]> {
    return this.get(UrlConstant.LIST_SPECIMENTYPE);
  }

  deleteSpecimenType(id: number): any {
    return this.delete(UrlConstant.LIST_SPECIMENTYPE + '/' + id, null);
  }

  addSpecimenType(item: any): any {
    return this.post(UrlConstant.LIST_SPECIMENTYPE, item);
  }

  updateSpecimenType(item: any): any {
    return this.put(
      UrlConstant.LIST_SPECIMENTYPE + '/' + item.id,
      item,
      'text'
    );
  }

  // Laboratory
  getLaboratory(): Observable<any[]> {
    return this.get('/Laboratory/GetAllLaboratory');
  }

  postLaboratory(payload: any): any {
    return this.post('/Laboratory/PostLaboratory', payload);
  }

  putLaboratory(payload: any): any {
    return this.post('/Laboratory/PutLaboratory', payload);
  }

  //MachineType
  getMachineType(): Observable<any[]> {
    return this.get(UrlConstant.LIST_MACHINETYPE);
  }

  deleteMachineType(id: number): any {
    return this.delete(UrlConstant.LIST_MACHINETYPE + '/' + id, null);
  }

  addMachineType(item: any): any {
    return this.post(UrlConstant.LIST_MACHINETYPE, item);
  }

  updateMachineType(item: any): any {
    return this.put(UrlConstant.LIST_MACHINETYPE + '/' + item.id, item, 'text');
  }

  // OrderType
  getOrderType(): Observable<any[]> {
    return this.get(UrlConstant.LIST_ORDERTYPE);
  }

  getOrderss(id: number): any {
    return this.get(UrlConstant.LIST_ORDERTYPE + '/' + id, id);
  }

  getOrderTypeFilter(item: any): any {
    return this.post('/OrderType/GetOrderTypeFilter', item);
  }

  deleteOrderType(id: number): any {
    return this.delete(UrlConstant.LIST_ORDERTYPE + '/' + id, null);
  }

  // getOrdersId(id: number): any {
  //   return this.get(UrlConstant.LIST_ORDER + '/' + id, id);
  // }
  addOrderType(item: any): any {
    return this.post(UrlConstant.LIST_ORDERTYPE, item);
  }

  updateOrderType(item: any): any {
    return this.put(UrlConstant.LIST_ORDERTYPE + '/' + item.id, item, 'text');
  }

  filterOrderType(item: any): any {
    return this.post(UrlConstant.LIST_ORDERTYPE + '/GetOrderTypeFilter', item);
  }

  downloadOrderTypeFilter(item: any): any {
    return this.post(
      UrlConstant.LIST_ORDERTYPE + '/DownloadOrderTypeFilter',
      item
    );
  }

  setResetDown(item: any): any {
    return this.post(UrlConstant.LIST_ORDERTYPE + '/SetResetDown', item);
  }

  setResetDownMulti(item: any): any {
    return this.post(UrlConstant.LIST_ORDERTYPE + '/SetResetDownMulti', item);
  }

  getLabsByOrderTypeId(id): Observable<any[]> {
    return this.get(UrlConstant.LIST_ORDERTYPE + '/GetLabs/' + id);
  }

  setLabToOrderType(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_ORDERTYPE + '/SetLabToOrderType',
      payload
    );
  }

  deleteLabToOrderType(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_ORDERTYPE + '/DeleteLabToOrderType',
      payload
    );
  }

  // Machine
  getMachine(): Observable<any[]> {
    return this.get(UrlConstant.LIST_MACHINE);
  }

  deleteMachine(id: number): any {
    return this.delete(UrlConstant.LIST_MACHINE + '/' + id, null);
  }

  addMachine(item: any): any {
    return this.post(UrlConstant.LIST_MACHINE, item);
  }

  updateMachine(item: any): any {
    return this.put(UrlConstant.LIST_MACHINE + '/' + item.id, item, 'text');
  }

  // Machine order type
  getAllMachineOrderTypes(payload): Observable<any[]> {
    return this.post('/MachineOrderTypes/QueryMachineOrderType', payload);
  }

  getMachineOrderType(machineId: any): Observable<any[]> {
    return this.get(UrlConstant.LIST_MACHINE_ORDER_TYPE + '/' + machineId);
  }

  deleteMachineOrderTypes(id: number): any {
    return this.delete(UrlConstant.LIST_MACHINE_ORDER_TYPE + '/' + id, null);
  }

  addMachineOrderTypes(item: any): any {
    return this.post(UrlConstant.LIST_MACHINE_ORDER_TYPE, item);
  }

  updateMachineOrderTypes(payload: any): any {
    return this.put(UrlConstant.LIST_MACHINE_ORDER_TYPE, payload);
  }

  enableMachineOrderTypes(payload): Observable<any[]> {
    return this.post(
      UrlConstant.LIST_MACHINE_ORDER_TYPE + '/EnableMachineOrderType',
      payload
    );
  }

  disableMachineOrderTypes(payload): Observable<any[]> {
    return this.post(
      UrlConstant.LIST_MACHINE_ORDER_TYPE + '/DisableMachineOrderType',
      payload
    );
  }

  // Task type
  getTaskType(): Observable<any[]> {
    return this.get(UrlConstant.LIST_TASKTYPE);
  }

  getTaskTypeByMachineId(machineId): any {
    return this.get(
      UrlConstant.LIST_TASKTYPE + `/GetTaskTypeByMachineId/${machineId}`
    );
  }

  getTaskTypeBySepcimenType(specimenId: any): Observable<any[]> {
    return this.get(
      UrlConstant.LIST_TASKTYPE + `/BySpecimentType/${specimenId}`
    );
  }

  getTaskTypeBySepcimenId(specimenId: any): Observable<any[]> {
    return this.get(UrlConstant.LIST_TASKTYPE + `/BySpeciment/${specimenId}`);
  }

  deleteTaskType(id: number): any {
    return this.delete(UrlConstant.LIST_TASKTYPE + '/' + id, null);
  }

  addTaskType(item: any): any {
    return this.post(UrlConstant.LIST_TASKTYPE, item);
  }

  updateTaskType(item: any): any {
    return this.put(UrlConstant.LIST_TASKTYPE + '/' + item.id, item, 'text');
  }

  getTaskTypeByOrderType(orderTypeId): Observable<any> {
    return this.get(UrlConstant.LIST_TASKTYPE + `/ByOrderType/${orderTypeId}`);
  }

  setTaskTypesByOrder(item: any): any {
    return this.post(UrlConstant.LIST_TASKTYPE + '/SetTaskTypesByOrder', item);
  }

  // Specimen
  getSpecimen(payload): any {
    return this.post(UrlConstant.LIST_SPECIMEN + '/Query', payload);
  }

  getSpecimenBarcode(code: any, width: any, height: any): any {
    return this.get(
      UrlConstant.LIST_SPECIMEN +
        '/BarCode?code=' +
        code +
        '&width=' +
        width +
        '&height=' +
        height,
      null,
      'text'
    );
  }

  takeSpecimen(payload: any): any {
    return this.put(
      UrlConstant.LIST_SPECIMEN + '/TakeSpecimen/' + payload.id,
      payload
    );
  }

  cancelSpecimen(specimenid: any): any {
    return this.put(
      UrlConstant.LIST_SPECIMEN + '/CancelSpecimen/' + specimenid,
      null
    );
  }

  deleteStorageSpecimen(id: any): any {
    return this.delete(`/SpecimenStorage/${id}`, null);
  }

  rejectSpecimen(specimenId: any, payload: any): any {
    return this.put(
      UrlConstant.LIST_SPECIMEN + '/RejectSpecimen/' + specimenId,
      payload
    );
  }

  genSpecimenId(payload): any {
    return this.post(UrlConstant.LIST_SPECIMEN + '/GenSpecimenID', payload);
  }

  getSpecimenCancelled(payload): any {
    return this.post(
      UrlConstant.LIST_SPECIMEN + '/QuerySpecimenCancelled',
      payload
    );
  }

  updateSpecimenStatus(payload, id): any {
    return this.post(
      UrlConstant.LIST_SPECIMEN + '/UpdateSpecimenStatus/' + id,
      payload
    );
  }

  reportReceiveSpecimen(payload): any {
    return this.post(
      UrlConstant.LIST_SPECIMEN + '/ReportReceiveSpecimen',
      payload
    );
  }

  reportSpecimenDetail(payload): any {
    return this.post('/Specimen/ReportSpecimenDetail', payload);
  }

  exportReportReceiveSpecimen(payload): any {
    const responseType = 'blob';
    return this.post(
      UrlConstant.LIST_SPECIMEN + '/ReportExcelReceiveSpecimen',
      payload,
      {},
      responseType
    );
  }

  receiveSpecimenDetail(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_SPECIMEN + '/ReceiveSpecimenDetail',
      payload
    );
  }

  updateSpecimenDetail(payload): Observable<any> {
    return this.put(
      UrlConstant.LIST_SPECIMEN + '/UpdateSpecimenDetail',
      payload
    );
  }

  getSpecimenDetail(id): Observable<any> {
    return this.get(UrlConstant.LIST_SPECIMEN + '/GetSpecimenDetail/' + id);
  }

  genStaffCodeSpecimenID(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_SPECIMEN + '/GenStaffCodeSpecimenID',
      payload
    );
  }

  ///double test
  exportDoubleTestFile(sid): Observable<any> {
    return this.get(
      UrlConstant.LIST_SPECIMEN + '/ExportDoubleTestFile/' + sid,
      '',
      'blob'
    );
  }

  readDoubleTest(payload): Observable<any> {
    return this.post('/ReadDoubleTest/UploadFile', payload);
  }

  // Patient
  getLstPatient(): any {
    return this.get(UrlConstant.LIST_PATIENT);
  }

  getPatient(payload): any {
    return this.get(UrlConstant.LIST_PATIENT + '/Query', payload);
  }

  createPatient(item: any): any {
    return this.post(UrlConstant.LIST_PATIENT, item);
  }

  deletePatient(id: number): any {
    return this.delete(UrlConstant.LIST_PATIENT + '/' + id, null);
  }

  updatePatient(item: any): any {
    return this.put(UrlConstant.LIST_PATIENT + '/' + item.id, item);
  }

  // ORDER - PHIEU
  createOrder(item: any): any {
    return this.post(UrlConstant.LIST_ORDER, item);
  }

  getOrder(): Observable<any[]> {
    return this.get(UrlConstant.LIST_ORDER);
  }

  getOrdersId(id: number): any {
    return this.get(UrlConstant.LIST_ORDER + '/' + id, id);
  }

  updateOrders(item: any): any {
    return this.put(UrlConstant.LIST_ORDER, item);
  }

  deleteOrderDetails(item: any): any {
    return this.post(UrlConstant.LIST_ORDER + '/RemoveOrderDetail', item);
  }

  deleteOrder(id: number): any {
    return this.delete(UrlConstant.LIST_ORDER + '/' + id, null);
  }

  findTaskByOrderType(specimenID: string): any {
    const item = { specimenID };
    return this.post('/Orders/FindTaskByOrderType', item);
  }

  receiveSpecimen(payload): any {
    return this.post('/Orders/ReceiveSpecimen', payload);
  }

  getOrderForAccountant(payload): any {
    return this.post('/Orders/GetOrderForAccountant', payload);
  }

  receiveCODOrder(payload): any {
    return this.post('/Orders/ReceiveCODOrder', payload);
  }

  storageSpecimen(payload): any {
    return this.post('/SpecimenStorage/SaveSpecimenStorage', payload);
  }

  destroySpecimen(payload): any {
    return this.post(UrlConstant.LIST_ORDER + '/DestroySpecimen', payload);
  }

  getResultValue(payload): any {
    return this.post(UrlConstant.LIST_ORDER + '/QueryResultValue', payload);
  }

  validResultValue(state, payload): any {
    return this.post(
      UrlConstant.LIST_ORDER + '/ValidResultValue/' + state,
      payload
    );
  }

  updateConsultInfo(payload): Observable<any> {
    return this.post(UrlConstant.LIST_ORDER + '/UpdateConsultInfo', payload);
  }

  resetDown(payload): any {
    return this.post(UrlConstant.LIST_ORDER + '/ResetDown', payload);
  }

  getReportPatient(payload): any {
    return this.post(UrlConstant.LIST_ORDER + '/ReportPatient', payload);
  }

  exportExecl(payload): any {
    const responseType = 'blob';
    return this.post(
      UrlConstant.LIST_ORDER + '/ReportExcelPatient',
      payload,
      {},
      responseType
    );
  }

  exportPDF(payload) {
    const responseType = 'blob';
    return this.post(
      UrlConstant.LIST_ORDER + '/ExportPdf',
      payload,
      {},
      responseType
    );
  }

  reportOrderConsultFilter(payload: any): Observable<any> {
    return this.post(
      UrlConstant.LIST_ORDER + '/ReportOrderConsultFilter',
      payload
    );
  }

  updateOrderPartner(payload: any): Observable<any> {
    return this.post(UrlConstant.LIST_ORDER + '/UpdateOrderPartner', payload);
  }

  getChangeOrderPartnerLog(payload: any): Observable<any> {
    return this.post(
      UrlConstant.LIST_ORDER + '/GetChangeOrderPartnerLog',
      payload
    );
  }

  orderDetailForOutSource(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_ORDER + '/OrderDetailForOutSource',
      payload
    );
  }

  queryStorageSpecimen(payload): Observable<any> {
    return this.post('/SpecimenStorage/QuerySpecimenStorage', payload);
  }

  queryDestroySpecimen(payload): Observable<any> {
    return this.post(UrlConstant.LIST_ORDER + '/QueryDestroySpecimen', payload);
  }

  // request
  getRequest(payload): any {
    return this.post(UrlConstant.URL_REQUEST + '/GetRequests', payload);
  }

  getRequestById(id): any {
    return this.get(UrlConstant.URL_REQUEST + '/' + id);
  }

  addRequest(item: any): any {
    return this.post(UrlConstant.URL_REQUEST, item);
  }

  addRequestDetail(payload: any): any {
    return this.post(UrlConstant.URL_REQUEST + '/AddRequestDetail', payload);
  }

  removeRequestReturnDetail(payload: any): any {
    return this.post(
      UrlConstant.URL_REQUEST + '/RemoveRequestReturnDetail',
      payload
    );
  }

  updateRequest(item: any): any {
    return this.put(UrlConstant.URL_REQUEST, item, 'text');
  }

  assignRequest(payload: any): Observable<any> {
    return this.post(UrlConstant.URL_REQUEST + '/AssignRequest', payload);
  }

  cancelRequest(payload: any): Observable<any> {
    return this.post(UrlConstant.URL_REQUEST + '/CancelRequest', payload);
  }

  unCancelRequest(payload: any): Observable<any> {
    return this.post(UrlConstant.URL_REQUEST + '/UnCancelRequest', payload);
  }

  assignReturnUserForRequest(payload: any): Observable<any> {
    return this.post(
      UrlConstant.URL_REQUEST + '/AssignReturnUserForRequest',
      payload
    );
  }

  reportRequestFilter(payload: any): Observable<any> {
    return this.post(UrlConstant.URL_REQUEST + '/ReportRequestFilter', payload);
  }

  getDeliveryDetailByRequestId(id): Observable<any> {
    return this.get(
      UrlConstant.URL_REQUEST + `/GetDeliveryDetailByRequestId/` + id
    );
  }

  // Profile
  getProfile(payload): any {
    return this.post(UrlConstant.URL_PROFILE + '/GetProfileFilter', payload);
  }

  getProfileById(profileID): Observable<any> {
    return this.get(UrlConstant.URL_PROFILE + `/GetProfileById/${profileID}`);
  }

  addProfile(item: any): any {
    return this.post(UrlConstant.URL_PROFILE, item);
  }

  updateProfile(item: any): any {
    return this.put(UrlConstant.URL_PROFILE, item, 'text');
  }

  addProfileTest(item: any): any {
    return this.post(UrlConstant.URL_PROFILE + '/AddProfileTest', item);
  }

  removeProfileTest(item: any): any {
    return this.post(UrlConstant.URL_PROFILE + '/RemoveProfileTest', item);
  }

  // Result type
  getResultType(): Observable<any[]> {
    return this.get(UrlConstant.LIST_RESULTTYPE);
  }

  deleteResultType(id: number): any {
    return this.delete(UrlConstant.LIST_RESULTTYPE + '/' + id, null);
  }

  addResultType(item: any): any {
    return this.post(UrlConstant.LIST_RESULTTYPE, item);
  }

  updateResultType(item: any): any {
    return this.put(UrlConstant.LIST_RESULTTYPE + '/' + item.id, item, 'text');
  }

  getResultTypeByByTaskType(taskTypeId): Observable<any> {
    return this.get(UrlConstant.LIST_RESULTTYPE + `/ByTaskType/${taskTypeId}`);
  }

  setResultTypesByTask(item: any): any {
    return this.post(
      UrlConstant.LIST_RESULTTYPE + '/SetResultTypesByTask',
      item
    );
  }

  //Barcode template

  getBarcodeTemplate(): Observable<any[]> {
    return this.get(UrlConstant.LIST_BARCODE_TEMPLATE);
  }

  getBarcodeTemplateById(id: number): Observable<any> {
    return this.get(UrlConstant.LIST_BARCODE_TEMPLATE + '/' + id);
  }

  deleteBarcodeTemplate(id: number): any {
    return this.delete(UrlConstant.LIST_BARCODE_TEMPLATE + '/' + id, null);
  }

  addBarcodeTemplate(item: any): any {
    return this.post(UrlConstant.LIST_BARCODE_TEMPLATE, item);
  }

  updateBarcodeTemplate(item: any): any {
    return this.put(
      UrlConstant.LIST_BARCODE_TEMPLATE + '/' + item.id,
      item,
      'text'
    );
  }

  //Task
  getTasks(): any {
    return this.get(UrlConstant.LIST_TASK);
  }

  getTask(payload): any {
    return this.get(UrlConstant.LIST_TASK + '/Query', payload);
  }

  getTaskById(id): any {
    return this.get(UrlConstant.LIST_TASK + '/' + id);
  }

  saveTaskTestResult(id: number, data: any): any {
    return this.put(UrlConstant.LIST_TASK + '/SaveTestResult/' + id, data);
  }

  getTaskByMachineId(machineId): any {
    return this.get(UrlConstant.LIST_TASK + `/GetTaskByMachineId/${machineId}`);
  }

  //TestResult
  updateTestResult(item: any): any {
    return this.put(UrlConstant.LIST_TEST_RESULT + '/' + item.id, item);
  }

  approveTestResult(item: any): any {
    return this.put(UrlConstant.LIST_TEST_RESULT + '/Approve/' + item.id, item);
  }

  cancelTestResult(item: any): any {
    return this.put(UrlConstant.LIST_TEST_RESULT + '/Cancel/' + item.id, item);
  }

  updateResultValue(payload): any {
    return this.post(UrlConstant.LIST_TEST_RESULT + '/Save', payload);
  }

  updateResultNote(payload): any {
    return this.post(UrlConstant.LIST_TEST_RESULT + '/SaveNoteResult', payload);
  }

  saveFile(payload): any {
    return this.post(UrlConstant.LIST_TEST_RESULT + '/SaveFile', payload);
  }

  removeFile(id): any {
    return this.delete(`/ResultValues/RemoveFile/${id}`, id);
  }

  getResultValueFromMachine(payload): any {
    return this.post(
      UrlConstant.LIST_TEST_RESULT + '/ResultValueFromMachine',
      payload
    );
  }

  getResultValueFromMachineLog(payload): any {
    return this.post(
      UrlConstant.LIST_TEST_RESULT + '/ResultValueFromMachineLog',
      payload
    );
  }

  getResultPCR(payload): any {
    return this.post(UrlConstant.LIST_TEST_RESULT + '/QueryResultPcr', payload);
  }

  saveResultPCR(payload): any {
    return this.post(UrlConstant.LIST_TEST_RESULT + '/SavePcrNumber', payload);
  }

  copyResultFromMachine(payload): any {
    return this.post(
      UrlConstant.LIST_TEST_RESULT + '/CopyResultFromMachine',
      payload
    );
  }

  mappingResultFromMachine(payload): any {
    return this.post(
      UrlConstant.LIST_TEST_RESULT + '/MappingResultFromMachine',
      payload
    );
  }

  readPcrResult(payload): Observable<any> {
    return this.post('/ReadPcrResult/UploadFile', payload);
  }

  // chemical category
  getChemicalCategory(): Observable<any[]> {
    return this.get(UrlConstant.LIST_CHEMICAL_CATEGORY);
  }

  deleteChemicalCategory(id: number): any {
    return this.delete(UrlConstant.LIST_CHEMICAL_CATEGORY + '/' + id, null);
  }

  addChemicalCategory(item: any): any {
    return this.post(UrlConstant.LIST_CHEMICAL_CATEGORY, item);
  }

  updateChemicalCategory(item: any): any {
    return this.put(
      UrlConstant.LIST_CHEMICAL_CATEGORY + '/' + item.id,
      item,
      'text'
    );
  }

  //category
  getCategory(): Observable<any[]> {
    return this.get(UrlConstant.LIST_CATEGORY);
  }

  getCategoryWithChemical(): Observable<any[]> {
    return this.get('/ChemicalCategories/CategoryWithChemical');
  }

  deleteCategory(id: number): any {
    return this.delete(UrlConstant.LIST_CATEGORY + '/' + id, null);
  }

  addCategory(item: any): any {
    return this.post(UrlConstant.LIST_CATEGORY, item);
  }

  updateCategory(item: any): any {
    return this.put(UrlConstant.LIST_CATEGORY + '/' + item.id, item, 'text');
  }

  // WarehouseChemical
  getWarehouseChemical(): Observable<any> {
    return this.get(UrlConstant.LIST_INPUT_WAREHOUSE);
  }

  getWarehouseChemicalFullDetail(): Observable<any> {
    return this.get(
      UrlConstant.LIST_INPUT_WAREHOUSE + '/GetInputWarehouse2'
    );
  }

  deleteWarehouseExport(id: number): any {
    return this.delete(UrlConstant.LIST_WAREHOUSE_EXPORT + '/' + id, null);
  }

  deleteWarehouseImport(id: number): any {
    return this.delete(UrlConstant.LIST_INPUT_WAREHOUSE + '/' + id, null);
  }

  addWarehouseChemical(item: any): any {
    return this.post(UrlConstant.LIST_INPUT_WAREHOUSE, item);
  }

  updateWarehouseChemical(item: any): any {
    return this.put(
      UrlConstant.LIST_INPUT_WAREHOUSE + '/' + item.id,
      item,
      'text'
    );
  }

  getChemicalByBarCode(code: any): any {
    return this.get(
      UrlConstant.LIST_INPUT_WAREHOUSE + `/GetChemicalByBarCode/${code}`
    );
  }

  getEvictionChemicalByBarCode(code: any): any {
    return this.get(`/WarehouseEvictions/GetChemicalByBarCode/${code}`);
  }

  // Chemical
  getChemical(): Observable<any[]> {
    return this.get(UrlConstant.LIST_CHEMICAL);
  }

  deleteChemical(id: number): any {
    return this.delete(UrlConstant.LIST_CHEMICAL + '/' + id, null);
  }

  addChemical(item: any): any {
    return this.post(UrlConstant.LIST_CHEMICAL, item);
  }

  updateChemical(item: any): any {
    return this.put(UrlConstant.LIST_CHEMICAL + '/' + item.id, item, 'text');
  }

  generateChemicalCode(categoryId: number, chemicalCategoryId: number): any {
    return this.get(
      `${UrlConstant.LIST_CHEMICAL}/generateCode/${categoryId}/${chemicalCategoryId}`
    );
  }

  // OderType Group
  listOrderGroup(): Observable<any[]> {
    return this.get(UrlConstant.LIST_ORDERGROUP);
  }

  addOrderGroup(item: any): any {
    return this.post(UrlConstant.LIST_ORDERGROUP, item);
  }

  updateOrderGroup(item: any): any {
    return this.put(UrlConstant.LIST_ORDERGROUP + '/' + item.id, item);
  }

  deleteOrderGroup(id: number): any {
    return this.delete(UrlConstant.LIST_ORDERGROUP + '/' + id, null);
  }

  // Consumption Chemical
  getConsumptionChemical(): Observable<any[]> {
    return this.get(UrlConstant.LIST_CONSUMABLE_RATE);
  }

  deleteConsumptionChemical(id: number): any {
    return this.delete(UrlConstant.LIST_CONSUMABLE_RATE + '/' + id, null);
  }

  addConsumptionChemical(item: any): any {
    return this.post(UrlConstant.LIST_CONSUMABLE_RATE, item);
  }

  updateConsumptionChemical(item: any): any {
    return this.put(
      UrlConstant.LIST_CONSUMABLE_RATE + '/' + item.id,
      item,
      'text'
    );
  }

  getComsumptionChemical(payload): any {
    return this.get(UrlConstant.LIST_CONSUMABLE_RATE + '/Query', payload);
  }

  // Warehouse
  getWarehouse(payload): any {
    return this.get(UrlConstant.LIST_WAREHOUSE + '/Query', payload);
  }

  getInventoryHistory(code): any {
    return this.get(
      UrlConstant.LIST_WAREHOUSE + `/GetInventoryHistory/${code}`
    );
  }

  // Machine result type
  getMachineResultType(payload): any {
    return this.get(UrlConstant.LIST_MACHINE_RESULT_TYPE + '/Query', payload);
  }

  addMachineResultType(item: any): any {
    return this.post(UrlConstant.LIST_MACHINE_RESULT_TYPE, item);
  }

  updateMachineResultType(item: any): any {
    return this.put(
      UrlConstant.LIST_MACHINE_RESULT_TYPE + '/' + item.id,
      item,
      'text'
    );
  }

  deleteMachineResultType(id: number): any {
    return this.delete(UrlConstant.LIST_MACHINE_RESULT_TYPE + '/' + id, null);
  }

  getBarCodeInputWarehouse(id): Observable<any[]> {
    return this.get(`/InputWarehouses/GetBarCodeInputWarehouse/${id}`);
  }

  getBarCodeInputWarehouseChemical(id, chemicalId): Observable<any[]> {
    return this.get(
      `/InputWarehouses/GetBarCodeInputWarehouseByChemicalId/${id}/${chemicalId}`
    );
  }

  // Export warhouse
  getWarehouseExportNeedConfirm(filter: any): Observable<any> {
    return this.post(
      UrlConstant.LIST_WAREHOUSE_EXPORT +
        '/GetWarehouseExportNeedConfirmReceived',
      filter
    );
  }

  confirmReceived(id: any): Observable<any> {
    return this.post(
      UrlConstant.LIST_WAREHOUSE_EXPORT + '/ConfirmReceived/' + id,
      null
    );
  }

  getWarehouseExport(filter: any): Observable<any> {
    return this.post(
      UrlConstant.LIST_WAREHOUSE_EXPORT + '/GetWarehouseExport',
      filter
    );
  }

  addWarehouseExport(item: any): Observable<any> {
    return this.post(UrlConstant.LIST_WAREHOUSE_EXPORT, item);
  }

  // ReInput warhouse
  getReInputWarehouse(filter: any): Observable<any> {
    return this.post(UrlConstant.RE_INPUT_WAREHOUSE + '/Get', filter);
  }

  saveReInputWarehouse(payload: any): Observable<any> {
    return this.post(UrlConstant.RE_INPUT_WAREHOUSE + '/Save', payload);
  }

  deleteReInputWarehouse(id): Observable<any> {
    return this.delete(UrlConstant.RE_INPUT_WAREHOUSE + '/Delete/' + id, '');
  }

  // Suppliers
  getSuppliers(): Observable<any[]> {
    return this.get(UrlConstant.SUPPLIERS);
  }

  addSuppliers(item: any): any {
    return this.post(UrlConstant.SUPPLIERS, item);
  }

  updateSuppliers(item: any): any {
    return this.put(UrlConstant.SUPPLIERS + '/' + item.id, item, 'text');
  }

  deleteSuppliers(id: number): any {
    return this.delete(UrlConstant.SUPPLIERS + '/' + id, null);
  }

  // Manufacturers
  getManufacturers(): Observable<any[]> {
    return this.get(UrlConstant.MANUFACTURERS);
  }

  addManufacturers(item: any): any {
    return this.post(UrlConstant.MANUFACTURERS, item);
  }

  updateManufacturers(item: any): any {
    return this.put(UrlConstant.MANUFACTURERS + '/' + item.id, item, 'text');
  }

  deleteManufacturers(id: number): any {
    return this.delete(UrlConstant.MANUFACTURERS + '/' + id, null);
  }

  // WarehouseInventory
  getWarehouseInventory(filter: any): Observable<any> {
    return this.post('/WarehouseInventory/GetWarehouseInventory', filter);
  }

  addWarehouseInventory(item: any): any {
    return this.post('/WarehouseInventory/PostWarehouseInventory', item);
  }

  startInventory(id: any): any {
    return this.post(`/WarehouseInventory/StartInventory/${id}`, null);
  }

  completeInventory(id: any): any {
    return this.post(`/WarehouseInventory/CompleteInventory/${id}`, null);
  }

  processInventory(item: any): any {
    return this.post('/WarehouseInventory/ProcessInventory', item);
  }

  getAllInventoryById(id: any): any {
    return this.get(`/WarehouseInventory/GetAllInventoryById/${id}`);
  }

  // Comsumable-units
  getComsumableUnit(): Observable<any[]> {
    return this.get(UrlConstant.CONSUMABLE_UNITS);
  }

  deleteComsumableUnit(id: number): any {
    return this.delete(UrlConstant.CONSUMABLE_UNITS + '/' + id, null);
  }

  addComsumableUnit(item: any): any {
    return this.post(UrlConstant.CONSUMABLE_UNITS, item);
  }

  updateComsumableUnit(item: any): any {
    return this.put(UrlConstant.CONSUMABLE_UNITS + '/' + item.id, item, 'text');
  }

  // Warehouse-inventory
  getInventoryList(item: any): any {
    return this.post(UrlConstant.CONSUMABLE_UNITS, item);
  }

  // Move from machine to machine
  getMoveToOtherMachine(filter: any): Observable<any> {
    return this.post(UrlConstant.MOVE_MACHINE + '/Get', filter);
  }

  saveMoveToOtherMachine(payload: any): Observable<any> {
    return this.post(UrlConstant.MOVE_MACHINE + '/Save', payload);
  }

  deleteMoveToOtherMachine(id): Observable<any> {
    return this.delete(UrlConstant.MOVE_MACHINE + '/Delete/' + id, '');
  }

  // Print-configs
  getAllPrintConfigs(): Observable<any[]> {
    return this.get(UrlConstant.PRINT_CONFIG);
  }

  getPrintConfigById(id: number): Observable<any[]> {
    return this.get(UrlConstant.PRINT_CONFIG + '/' + id, null);
  }

  addPrintConfigs(item: any): any {
    return this.post(UrlConstant.PRINT_CONFIG, item);
  }

  updatePrintConfigs(item: any): any {
    return this.put(UrlConstant.PRINT_CONFIG + '/' + item.id, item, 'text');
  }

  deletePrintConfigs(id: number): any {
    return this.delete(UrlConstant.PRINT_CONFIG + '/' + id, null);
  }

  // Calibrate
  getAllCalibrate(payload): Observable<any[]> {
    return this.get(UrlConstant.CALIBRATE + '/Query', payload);
  }

  getCalibrateById(id: number): Observable<any[]> {
    return this.get(UrlConstant.CALIBRATE + '/' + id, null);
  }

  addCalibrate(payload: any): any {
    return this.post(UrlConstant.CALIBRATE, payload);
  }

  updateCalibrate(payload: any): any {
    return this.put(UrlConstant.CALIBRATE + '/' + payload.id, payload, 'text');
  }

  cancelCalibrate(id: number): any {
    return this.put(UrlConstant.CALIBRATE + '/Cancel/' + id, null);
  }

  //Quality-controls
  getAllQualityControls(payload): Observable<any[]> {
    return this.get(UrlConstant.QUALITY_CONTROLS + '/Query', payload);
  }

  getQualityControlsById(id: number): Observable<any[]> {
    return this.get(UrlConstant.QUALITY_CONTROLS + '/' + id, null);
  }

  addQualityControls(payload: any): any {
    return this.post(UrlConstant.QUALITY_CONTROLS, payload);
  }

  updateQualityControls(payload: any): any {
    return this.put(
      UrlConstant.QUALITY_CONTROLS + '/' + payload.id,
      payload,
      'text'
    );
  }

  cancelQualityControls(id: number): any {
    return this.put(UrlConstant.QUALITY_CONTROLS + '/Cancel/' + id, null);
  }

  postSameOrderType(item: any): any {
    return this.post('/OrderType/PostSameOrderType', item);
  }

  getOrderTypeByRID(rId): Observable<any> {
    return this.post(`/OrderType/GetOrderTypeByRID/${rId}`, null);
  }

  addNewPcrtest(num): any {
    return this.post(`/Pcrtest/AddNewPcrtest?num=${num}`, null);
  }

  updatePcrtest(payload): any {
    return this.post(`/Pcrtest/UpdatePcrtest`, payload);
  }

  getPatientInfo(code): any {
    return this.post(`/Pcrtest/GetPatientInfo/${code}`, null);
  }

  pcrtestFilter(payload): any {
    return this.post('/Pcrtest/PcrtestFilter', payload);
  }

  //Print
  printOrder(payload): any {
    return this.post('/Print/PrintOrder', payload);
  }

  printMultiOrder(payload): any {
    return this.post('/Print/PrintOrders', payload);
  }

  getResultValueByOrderCode(orderCode): any {
    return this.get(`/Orders/GetResultValueByOrderCode/${orderCode}`);
  }

  updateResultValue2(payload): any {
    return this.post(`/Orders/UpdateResultValue`, payload);
  }

  getResultValueLog(id): any {
    return this.get(`/ResultValueLog/GetByResultId/` + id);
  }

  getListRequestType(): Observable<any[]> {
    return this.get('/Request/GetRequestType');
  }

  //Normal Range
  addNormalRange(payload: any): Observable<any> {
    return this.post(UrlConstant.NORMAL_RANGE, payload);
  }

  updateNormalRange(payload: any): any {
    return this.put(UrlConstant.NORMAL_RANGE, payload);
  }

  getListResultUrineNote() {
    return this.get(UrlConstant.NORMAL_RANGE + '/GetListResultUrineNote');
  }

  postResultUrineNote(payload) {
    return this.post(
      UrlConstant.NORMAL_RANGE + '/PostResultUrineNote',
      payload
    );
  }

  putResultUrineNote(payload) {
    return this.put(UrlConstant.NORMAL_RANGE + '/PutResultUrineNote', payload);
  }

  getNormalRangeByTestCode(code: any): Observable<any> {
    return this.get(
      UrlConstant.NORMAL_RANGE + '/GetNormalRangeByTestCode/' + code,
      null
    );
  }

  removeSpecimenDetail(id: number): any {
    return this.delete(`/Specimen/RemoveSpecimenDetail/${id}`, id);
  }

  setEmergency(id: number): Observable<any> {
    return this.post(`/Orders/SetEmergency/${id}`, null);
  }

  unSetEmergency(id: number): Observable<any> {
    return this.post(`/Orders/UnSetEmergency/${id}`, null);
  }

  /// Delivery
  genDeliveryCode(): Observable<any> {
    return this.post(`/Delivery/GenDeliveryCode`, null);
  }

  postDelivery(payload): Observable<any> {
    return this.post(`/Delivery/PostDelivery`, payload);
  }

  putDelivery(payload): Observable<any> {
    return this.put(`/Delivery/PutDelivery`, payload);
  }

  addDeliveryDetail(payload): Observable<any> {
    return this.post(`/Delivery/AddDeliveryDetail`, payload);
  }

  getDeliveryFilter(payload): Observable<any> {
    return this.post(`/Delivery/GetDeliveryFilter`, payload);
  }

  removeDeliveryDetail(payload): Observable<any> {
    return this.post(`/Delivery/RemoveDeliveryDetail`, payload);
  }

  updateDeliveryDetail(payload): Observable<any> {
    return this.post(`/Delivery/UpdateDeliveryDetail`, payload);
  }

  getDeliveryDetailByOrderId(id): Observable<any> {
    return this.get(`/Delivery/GetDeliveryDetailByOrderId/` + id);
  }

  saveProfessionalAssistant(id): any {
    return this.post(
      UrlConstant.SYSTEM_CONFIG + '/SaveProfessionalAssistant?id=' + id,
      null
    );
  }

  saveProfessionalCouncil(id: any): any {
    return this.post(
      UrlConstant.SYSTEM_CONFIG + '/SaveProfessionalCouncil?id=' + id,
      null
    );
  }

  getSystemConfigByName(name: any): any {
    return this.get(`/SysConfig/` + name);
  }

  //Billing
  getBillToPay(payload): Observable<any> {
    return this.post(UrlConstant.BILLING + '/QueryOrderNeedPaidWeb', payload);
  }

  getBillPaid(payload): Observable<any> {
    return this.post(UrlConstant.BILLING + '/QueryOrderPaid', payload);
  }

  paidMoney(payload): Observable<any> {
    return this.post(UrlConstant.BILLING + '/PaidMoney', payload);
  }

  searchOrderTypeFilterNew(item: any): any {
    return this.post(
      UrlConstant.LIST_ORDERTYPE + '/SearchOrderTypeFilterNew',
      item
    );
  }

  addOrderDetail(item: any): any {
    return this.post('/Orders/AddOrderDetail', item);
  }

  uploadResultOutsource(
    formData: any,
    orderId: any,
    resultTypeId: any,
    orderTypeId: any
  ): Observable<any> {
    return this.post(
      `/Upload/UploadFileOutsource?orderId=${orderId}&resultTypeId=${resultTypeId}&orderTypeId=${orderTypeId}`,
      formData
    );
  }

  updateResultFromMachine(payload): any {
    return this.post('/ResultValues/UpdateResultFromMachine', payload);
  }

  getPartner(id: any): any {
    return this.get(`/Partners/${id}`);
  }

  //reports
  baoCaoDoanhSo(payload): Observable<any> {
    return this.post(UrlConstant.LIST_ORDER + '/BaoCaoDoanhSo', payload);
  }

  baoCaoDoanhSoNgay(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_ORDER + '/BaoCaoDoanhSoTheoNgay',
      payload
    );
  }

  baoCaoDoanhSoChoCTV(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_ORDER + '/BaoCaoDoanhSoTheoCTVFilter',
      payload
    );
  }

  baoCaoDoanhSoChoNVLM(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_ORDER + '/BaoCaoDoanhSoChoNVLMFilter',
      payload
    );
  }

  baoCaoDoanhSoChoNVKD(payload): Observable<any> {
    return this.post(
      UrlConstant.LIST_ORDER + '/BaoCaoDoanhSoChoKinhDoanhFilter',
      payload
    );
  }

  //SendSpecimen
  getSendSpecimenFilter(payload): Observable<any> {
    return this.post(
      UrlConstant.SEND_SPECIMEN + '/GetSendSpecimenFilter',
      payload
    );
  }

  putSendSpecimen(payload): Observable<any> {
    return this.put(UrlConstant.SEND_SPECIMEN + '/PutSendSpecimen', payload);
  }

  postSendSpecimen(payload): Observable<any> {
    return this.post(UrlConstant.SEND_SPECIMEN + '/PostSendSpecimen', payload);
  }

  assignSendSpecimen(payload): Observable<any> {
    return this.post(
      UrlConstant.SEND_SPECIMEN + '/AssignSendSpecimen',
      payload
    );
  }

  genSendSpecimenCode(): Observable<any> {
    return this.post(UrlConstant.SEND_SPECIMEN + '/GenSendSpecimenCode', null);
  }

  getSendSpecimenById(id): Observable<any> {
    return this.get(UrlConstant.SEND_SPECIMEN + '/GetSendSpecimenById/' + id);
  }

  //
  getLabsByOrderDetailId(id): Observable<any[]> {
    return this.get(`/Orders/GetLabs/${id}`);
  }

  setLab(payload): Observable<any> {
    return this.post('/Orders/SetLab', payload);
  }

  resetLab(payload): Observable<any> {
    return this.post(UrlConstant.LIST_ORDER + '/ResetLab', payload);
  }

  //Appointment Time
  getAppointmentTimeFilter(payload): Observable<any> {
    return this.post(
      UrlConstant.APPOINTMENT_TIME + '/GetAppointmentTimeFilter',
      payload
    );
  }

  addAppointmentTime(payload): Observable<any> {
    return this.post(
      UrlConstant.APPOINTMENT_TIME + '/PostAppointmentTime',
      payload
    );
  }

  updateAppointmentTime(payload): Observable<any> {
    return this.put(
      UrlConstant.APPOINTMENT_TIME + '/PutAppointmentTime',
      payload
    );
  }

  deleteAppointmentTime(id: number): any {
    return this.delete(
      UrlConstant.APPOINTMENT_TIME + '/DeleteAppointmentTime/' + id,
      null
    );
  }

  //Report
  getOrderTypeReport(payload): Observable<any> {
    return this.post(UrlConstant.REPORT + '/QueryOrderTypeReport', payload);
  }

  updateAllPriceOrderByPartner(item: any): any {
    return this.post('/Orders/UpdateAllPriceOrderByPartner', item);
  }

  getWarehouseEvictionFilter(filter: any): Observable<any> {
    return this.post('/WarehouseEvictions/GetWarehouseEvictionFilter', filter);
  }

  addWarehouseEviction(item: any): Observable<any> {
    return this.post('/WarehouseEvictions', item);
  }

  updateDoPrint(item: any): any {
    return this.post('/Partners/UpdateDoPrint', item);
  }

  //Firebase Token
  saveToken(payload: any) {
    return this.post(
      UrlConstant.USER_NOTIFICATION +
        `?token=${payload.token}&deviceType=${payload.deviceType}`,
      null
    );
  }

  sendNotification() {
    return this.post(UrlConstant.USER_NOTIFICATION + '/testSingle', null);
  }
}
