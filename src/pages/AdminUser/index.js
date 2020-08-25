import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '~/services/api';

import { Container } from './styles';

import TitleButtonBack from '~/components/TitleButtonBack';
import UserForm from './UserForm';

function AdminUser() {
  const { id } = useParams();

  const [editUser, setEditUser] = useState(false);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const { data } = await api.get(`/admin-users/${id}`);
      setFormData(data);
    }

    if (id) {
      setEditUser(true);
      fetchData();
    }

    setLoading(false);
  }, [id]);

  return (
    <Container>
      <h2>
        <TitleButtonBack goTo="/admin-users" />
        {editUser ? 'Editar Usuário' : 'Adicionar Usuário'}
      </h2>

      {loading && <h3>Loading...</h3>}

      <UserForm editUser={editUser} formData={formData} />
    </Container>
  );
}

export default AdminUser;
