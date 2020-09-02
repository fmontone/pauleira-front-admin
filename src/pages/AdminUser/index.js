import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '~/services/api';

import {
  Container,
  PageHeader,
  ProfilePic,
  ButtonDeleteProfilePic,
} from './styles';

import TitleButtonBack from '~/components/TitleButtonBack';
import UserForm from './UserForm';

function AdminUser() {
  const { id } = useParams();

  const [editUser, setEditUser] = useState(false);
  const [formData, setFormData] = useState(null);
  const [checkPic, setCheckPick] = useState(false);
  const [loading, setLoading] = useState(true);

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

  async function handleDleteImage() {
    if (id) {
      try {
        await api.delete(`/admin-users/profile-img/${id}`);
      } catch (error) {
        alert('Erro ao excluir imagem.');
      }
    }
  }

  return (
    <Container>
      <h2>
        <TitleButtonBack goTo="/admin-users" />
        {editUser ? 'Editar Usuário' : 'Adicionar Usuário'}
      </h2>

      {formData && editUser && (
        <PageHeader>
          <ProfilePic
            src={!checkPic ? null : formData.profile_image.url}
            alt="Profile"
          />

          <ButtonDeleteProfilePic
            disabled={!checkPic}
            onClick={handleDleteImage}
          >
            Delete Image
          </ButtonDeleteProfilePic>
        </PageHeader>
      )}

      {loading && <h3>Loading...</h3>}

      <UserForm editUser={editUser} formData={formData} />
    </Container>
  );
}

export default AdminUser;
