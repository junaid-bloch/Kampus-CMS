
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string; remember: boolean }) => void;
  userType: 'student' | 'faculty' | 'admin';
}

const LoginForm = ({ onSubmit, userType }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      onSubmit({ email, password, remember });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder={`${userType}@example.com`}
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input
          id="password"
          placeholder="••••••••"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="remember" 
          checked={remember} 
          onCheckedChange={(checked) => setRemember(checked as boolean)}
        />
        <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
          Remember me
        </Label>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-campus-primary hover:bg-campus-primary/90" 
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
};

export default LoginForm;
