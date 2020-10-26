import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import api from '~/services/api';

import { useToast } from '~/hooks/ToastContext';
import { useAdmUsers } from '~/hooks/UsersAdmContext';

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
import PageTitle from '~/components/PageTitle';

function AdminUser() {
  const { id } = useParams();

  const [editUser, setEditUser] = useState(false);
  const [formData, setFormData] = useState(null);
  const [checkPic, setCheckPick] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(false);

  const fileInputRef = useRef(null);

  const { addToast } = useToast();

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

        setFormData({ ...formData, profile_image: '' });

        addToast({
          type: 'success',
          message: 'Imagem excluída com sucesso!',
        });
      } catch (error) {
        addToast({
          type: 'error',
          message: 'Erro ao excluir imagem',
        });
      }
    }
  }

  async function handleUploadPic(e) {
    setProfileLoading(true);

    const formDataPic = new FormData();

    formDataPic.append('file', e.target.files[0]);

    try {
      const response = await api.post(
        `/admin-users/profile-img/${id}`,
        formDataPic
      );

      const { url } = response.data;

      setFormData({ ...formData, profile_image: { url } });

      addToast({
        type: 'success',
        message: 'Imagem adicionada com sucesso!',
      });
    } catch (err) {
      if (err)
        addToast({
          type: 'error',
          message: 'Erro ao adicionar imagem',
        });
    }

    setProfileLoading(false);
  }

  return (
    <Container>
      <TitleWrapper>
        <PageTitle>
          <TitleButtonBack goTo="/admin-users" />
          {editUser ? 'Editar Usuário' : 'Adicionar Usuário'}
        </PageTitle>
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
