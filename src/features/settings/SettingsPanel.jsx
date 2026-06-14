import { Settings } from 'lucide-react';
import { Panel } from '../../components/Panel';

export function SettingsPanel({ current }) {
  return <Panel title="User and ensemble settings" icon={<Settings />} action="Save preferences">
    <div className="settings-grid">
      <label>Profile name<input defaultValue="Ensemble User" /></label>
      <label>Account type<input defaultValue={current.role} /></label>
      <label>Instrument<input defaultValue={current.instrument} /></label>
      <label>Appearance<select defaultValue="System"><option>System</option><option>Light</option><option>Dark</option></select></label>
      <label>Email<input defaultValue="student@example.com" /></label>
      <label>Password<button className="danger-button">Change password</button></label>
    </div>
  </Panel>;
}
