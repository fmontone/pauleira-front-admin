import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import api from '~/services/api';

import {
  Container,
  TitleWrapper,
  ContentWrapper,
  PageHeader,
  ProfilePic,
  ButtonAddProfilePic,
  ButtonDeleteProfilePic,
} from './styles';

import TitleButtonBack from '~/components/TitleButtonBack';
import UserForm from './UserForm';
import LoadingCircle from '~/components/LoadingCircle';

function AdminUser() {
  const { id } = useParams();

  const [editUser, setEditUser] = useState(false);
  const [formData, setFormData] = useState(null);
  const [checkPic, setCheckPick] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const { data } = await api.get(`/admin-users/${id}`);
      setFormData(data);
    }

    if (!editUser && id) {
      fetchData();
      setEditUser(true);
    }

    setLoading(false);
  }, [id, editUser]);

  useEffect(() => {
    if (!formData) {
      setCheckPick(false);
    } else if (formData && formData.profile_image !== null) {
      setCheckPick(true);
    }
  }, [formData, checkPic]);

  async function handleDletePic() {
    if (id) {
      try {
        await api.delete(`/admin-users/profile-img/${id}`);

        window.location.reload();
      } catch (error) {
        alert('Erro ao excluir imagem.'); /*eslint-disable-line*/
      }
    }
  }

  async function handleUploadPic(e) {
    setProfileLoading(true);

    const formDataPic = new FormData();

    formDataPic.append('file', e.target.files[0]);

    try {
      api.post(`/admin-users/profile-img/${id}`, formDataPic);

      alert('Imagem adicionada com sucesso!'); /*eslint-disable-line*/

      window.location.reload();
    } catch (err) {
      if(err) alert('Erro ao adicionar imagem.'); /*eslint-disable-line*/
    }

    setProfileLoading(false);
  }

  return (
    <Container>
      <TitleWrapper>
        <h2>
          <TitleButtonBack goTo="/admin-users" />
          {editUser ? 'Editar Usuário' : 'Adicionar Usuário'}
        </h2>
      </TitleWrapper>

      <ContentWrapper>
        {formData && editUser && (
          <PageHeader>
            <ProfilePic
              src={!checkPic ? null : formData.profile_image.url}
              alt="Profile"
            />

            <ButtonAddProfilePic onClick={() => fileInputRef.current.click()}>
              Adicionar/Mudar
            </ButtonAddProfilePic>
            <input
              type="file"
              hidden
              name="profile-pic"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleUploadPic}
            />

            <ButtonDeleteProfilePic
              disabled={!checkPic}
              onClick={handleDletePic}
            >
              Excluir
            </ButtonDeleteProfilePic>

            {profileLoading && <LoadingCircle color="rebeccapurple" />}
          </PageHeader>
        )}

        {loading && <h3>Loading...</h3>}

        <UserForm editUser={editUser} formData={formData} />
      </ContentWrapper>
    </Container>
  );
}

export default AdminUser;
