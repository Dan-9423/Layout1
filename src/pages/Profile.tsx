import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from 'lucide-react';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    phone: '+55 (11) 99999-9999',
    role: 'Administrador',
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-[#1C1C1C] rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Editar Perfil</h1>
      
      <div className="mb-8 relative w-fit mx-auto">
        <Avatar className="h-32 w-32">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Button size="icon" className="absolute bottom-0 right-0 rounded-full">
          <Camera className="h-4 w-4" />
        </Button>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Cargo</Label>
            <Input
              id="role"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Nova Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Digite para alterar a senha"
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => window.history.back()}>
            Cancelar
          </Button>
          <Button>
            Salvar Alterações
          </Button>
        </div>
      </form>
    </div>
  );
}