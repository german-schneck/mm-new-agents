import { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { BundleTypes } from "@/bundles/bundles.types";
import { SectorTypes, ClientIdentityTypes, ClientGenderTypes } from "@/clients/clients.types";

import { newSaleSchema } from "./schema";
import { NewSaleFormValues, NewSaleFormProps } from "./types";

export default function NewSaleForm({ onSubmit, isLoading }: NewSaleFormProps) {
  const { t } = useTranslation();
  const { handleSubmit, control, formState } = useForm<NewSaleFormValues>({
    resolver: zodResolver(newSaleSchema),
    mode: "onBlur",
  });

  /**
   * Renders the bundle container with sector selection.
   *
   * @returns {JSX.Element} The bundle container component.
   */
  const renderBundleContainer = useMemo(
    () => (
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography fontWeight="medium" color="secondary">
          {t("forms.new_sale_form.bundle_info")}
        </Typography>
        <Controller
          name="bundle"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="bundle-label">{t("forms.new_sale_form.bundle")}</InputLabel>
              <Select labelId="bundle-label" id="bundle" {...field} label={t("forms.new_sale_form.bundle")} fullWidth>
                <MenuItem value="" disabled>
                  {t("forms.new_sale_form.select_bundle")}
                </MenuItem>
                {Object.values(BundleTypes).map((bundle) => (
                  <MenuItem key={bundle} value={bundle}>
                    {t(`forms.new_sale_form.bundle.${bundle}`)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Box>
    ),
    [control, t],
  );

  /**
   * Renders the client container with client information fields.
   *
   * @returns {JSX.Element} The client container component.
   */
  const renderClientContainer = useMemo(
    () => (
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography fontWeight="medium" color="secondary">
          {t("forms.new_sale_form.client_info")}
        </Typography>
        <Controller
          name="client.sector"
          control={control}
          defaultValue={""}
          render={({ field, fieldState: { error } }) => (
            <FormControl fullWidth error={!!error}>
              <InputLabel id="client-sector-label">{t("forms.new_sale_form.sector")}</InputLabel>
              <Select
                labelId="client-sector-label"
                id="client-sector"
                {...field}
                label={t("forms.new_sale_form.sector")}
                fullWidth
              >
                <MenuItem value="" disabled>
                  {t("forms.new_sale_form.select_sector")}
                </MenuItem>
                {Object.values(SectorTypes).map((sector) => (
                  <MenuItem key={sector} value={sector}>
                    {t(`forms.new_sale_form.sector.${sector}`)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
        <Box display="flex" gap={2}>
          <Controller
            name="client.dni"
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("forms.new_sale_form.document")}
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? t(error.message as string) : ""}
              />
            )}
          />
          <Controller
            name="client.type"
            control={control}
            defaultValue={""}
            render={({ field, fieldState: { error } }) => (
              <FormControl fullWidth error={!!error}>
                <InputLabel id="client-type-label">{t("forms.new_sale_form.identity_type")}</InputLabel>
                <Select
                  labelId="client-type-label"
                  id="client-type"
                  {...field}
                  label={t("forms.new_sale_form.identity_type")}
                  fullWidth
                >
                  <MenuItem key={"empty"} value={""} disabled>
                    {t("forms.new_sale_form.select_identity_type")}
                  </MenuItem>
                  {Object.values(ClientIdentityTypes).map((type) => (
                    <MenuItem key={type} value={type}>
                      {t(`forms.new_sale_form.identity_type.${type}`)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Box>
        <Box display="flex" gap={2}>
          <Controller
            name="client.firstName"
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("forms.new_sale_form.first_name")}
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? t(error.message as string) : ""}
              />
            )}
          />
          <Controller
            name="client.lastName"
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label={t("forms.new_sale_form.last_name")}
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? t(error.message as string) : ""}
              />
            )}
          />
        </Box>
        <Controller
          name="client.gender"
          control={control}
          defaultValue={""}
          render={({ field, fieldState: { error } }) => (
            <FormControl fullWidth error={!!error}>
              <InputLabel id="client-gender-label">{t("forms.new_sale_form.gender")}</InputLabel>
              <Select
                labelId="client-gender-label"
                id="client-gender"
                {...field}
                label={t("forms.new_sale_form.gender")}
                fullWidth
              >
                <MenuItem key={"empty"} value={""} disabled>
                  {t("forms.new_sale_form.select_gender")}
                </MenuItem>
                {Object.values(ClientGenderTypes).map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {t(`forms.new_sale_form.gender.${gender}`)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="client.country"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t("forms.new_sale_form.country")}
              variant="outlined"
              fullWidth
              error={!!error}
              helperText={error ? t(error.message as string) : ""}
            />
          )}
        />
        <Controller
          name="client.language"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t("forms.new_sale_form.language")}
              variant="outlined"
              fullWidth
              error={!!error}
              helperText={error ? t(error.message as string) : ""}
            />
          )}
        />
        <Controller
          name="client.phoneNumber"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t("forms.new_sale_form.phone_number")}
              variant="outlined"
              fullWidth
              type="number"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              error={!!error}
              helperText={error ? t(error.message as string) : ""}
            />
          )}
        />
        <Controller
          name="client.emailAddress"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t("forms.new_sale_form.email_address")}
              variant="outlined"
              fullWidth
              error={!!error}
              helperText={error ? t(error.message as string) : ""}
            />
          )}
        />
        <Controller
          name="client.physicalAddress"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label={t("forms.new_sale_form.physical_address")}
              variant="outlined"
              fullWidth
              error={!!error}
              helperText={error ? t(error.message as string) : ""}
            />
          )}
        />
      </Box>
    ),
    [control, t],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="new-sale-form">
      {renderBundleContainer}
      <Divider sx={{ my: 4 }} />
      {renderClientContainer}
      <Box display="flex" flexDirection="column" gap={2} mt={4}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="medium"
          disabled={isLoading || !formState.isValid}
        >
          {isLoading ? <CircularProgress variant={"indeterminate"} size={22} /> : t("forms.new_sale_form.submit")}
        </Button>
      </Box>
    </form>
  );
}
