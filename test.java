package android.os;

import android.Manifest;
import android.annotation.NonNull;
import android.annotation.Nullable;
import android.annotation.RequiresPermission;
import android.annotation.SuppressAutoDoc;
import android.annotation.SystemApi;
import android.annotation.TestApi;
import android.app.ActivityThread;
import android.app.Application;
import android.compat.annotation.UnsupportedAppUsage;
import android.content.Context;
import android.sysprop.DeviceProperties;
import android.sysprop.SocProperties;
import android.sysprop.TelephonyProperties;
import android.text.TextUtils;
import android.util.ArraySet;
import android.util.Slog;
import android.view.View;

import dalvik.system.VMRuntime;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

public class Build {
    private static final String TAG = "Build";

    public static final String UNKNOWN = "unknown";

    public static final String ID = getString("ro.build.id");

    public static final String DISPLAY = getString("ro.build.display.id");

    public static final String PRODUCT = getString("ro.product.name");

    public static final String DEVICE = getString("ro.product.device");

    public static final String BOARD = getString("ro.product.board");

    @Deprecated
    public static final String CPU_ABI;

    @Deprecated
    public static final String CPU_ABI2;

    public static final String MANUFACTURER = getString("ro.product.manufacturer");

    public static final String BRAND = getString("ro.product.brand");

    public static final String MODEL = getString("ro.product.model");

    @NonNull
    public static final String SOC_MANUFACTURER = SocProperties.soc_manufacturer().orElse(UNKNOWN);

    @NonNull
    public static final String SOC_MODEL = SocProperties.soc_model().orElse(UNKNOWN);

    public static final String BOOTLOADER = getString("ro.bootloader");

    @Deprecated
    public static final String RADIO = joinListOrElse(
            TelephonyProperties.baseband_version(), UNKNOWN);

    public static final String HARDWARE = getString("ro.hardware");

    @NonNull
    public static final String SKU = getString("ro.boot.hardware.sku");

    @NonNull
    public static final String ODM_SKU = getString("ro.boot.product.hardware.sku");

    @UnsupportedAppUsage
    @TestApi
    public static final boolean IS_EMULATOR = getString("ro.boot.qemu").equals("1");

    @Deprecated

    public static final String SERIAL = getString("no.such.thing");

    @SuppressAutoDoc 
    @RequiresPermission(Manifest.permission.READ_PRIVILEGED_PHONE_STATE)
    public static String getSerial() {
        IDeviceIdentifiersPolicyService service = IDeviceIdentifiersPolicyService.Stub
                .asInterface(ServiceManager.getService(Context.DEVICE_IDENTIFIERS_SERVICE));
        try {
            Application application = ActivityThread.currentApplication();
            String callingPackage = application != null ? application.getPackageName() : null;
            return service.getSerialForPackage(callingPackage, null);
        } catch (RemoteException e) {
            e.rethrowFromSystemServer();
        }
        return UNKNOWN;
    }

    public static final String[] SUPPORTED_ABIS = getStringList("ro.product.cpu.abilist", ",");

    public static final String[] SUPPORTED_32_BIT_ABIS =
            getStringList("ro.product.cpu.abilist32", ",");

    public static final String[] SUPPORTED_64_BIT_ABIS =
            getStringList("ro.product.cpu.abilist64", ",");

    @TestApi
    public static boolean is64BitAbi(String abi) {
        return VMRuntime.is64BitAbi(abi);
    }

    static {

        final String[] abiList;
        if (VMRuntime.getRuntime().is64Bit()) {
            abiList = SUPPORTED_64_BIT_ABIS;
        } else {
            abiList = SUPPORTED_32_BIT_ABIS;
        }

        CPU_ABI = abiList[0];
        if (abiList.length > 1) {
            CPU_ABI2 = abiList[1];
        } else {
            CPU_ABI2 = "";
        }
    }

    public static class VERSION {

        public static final String INCREMENTAL = getString("ro.build.version.incremental");

        public static final String RELEASE = getString("ro.build.version.release");

        @NonNull public static final String RELEASE_OR_CODENAME = getString(
                "ro.build.version.release_or_codename");

        @NonNull public static final String RELEASE_OR_PREVIEW_DISPLAY = getString(
                "ro.build.version.release_or_preview_display");

        public static final String BASE_OS = SystemProperties.get("ro.build.version.base_os", "");

        public static final String SECURITY_PATCH = SystemProperties.get(
                "ro.build.version.security_patch", "");

        public static final int MEDIA_PERFORMANCE_CLASS =
                DeviceProperties.media_performance_class().orElse(0);

        @Deprecated
        public static final String SDK = getString("ro.build.version.sdk");

        public static final int SDK_INT = SystemProperties.getInt(
                "ro.build.version.sdk", 0);

        @SystemApi(client = SystemApi.Client.MODULE_LIBRARIES)
        @TestApi
        public static final int DEVICE_INITIAL_SDK_INT = SystemProperties
                .getInt("ro.product.first_api_level", 0);

        public static final int PREVIEW_SDK_INT = SystemProperties.getInt(
                "ro.build.version.preview_sdk", 0);

        @SystemApi
        @NonNull public static final String PREVIEW_SDK_FINGERPRINT = SystemProperties.get(
                "ro.build.version.preview_sdk_fingerprint", "REL");

        public static final String CODENAME = getString("ro.build.version.codename");

        @SystemApi
        @NonNull public static final Set<String> KNOWN_CODENAMES =
                new ArraySet<>(getStringList("ro.build.version.known_codenames", ","));

        private static final String[] ALL_CODENAMES
                = getStringList("ro.build.version.all_codenames", ",");

        @UnsupportedAppUsage
        @TestApi
        public static final String[] ACTIVE_CODENAMES = "REL".equals(ALL_CODENAMES[0])
                ? new String[0] : ALL_CODENAMES;

        @TestApi
        public static final int RESOURCES_SDK_INT = SDK_INT + ACTIVE_CODENAMES.length;

        public static final int MIN_SUPPORTED_TARGET_SDK_INT = SystemProperties.getInt(
                "ro.build.version.min_supported_target_sdk", 0);
    }

    public static class VERSION_CODES {

        public static final int CUR_DEVELOPMENT = 10000;

        public static final int BASE = 1;

        public static final int BASE_1_1 = 2;

        public static final int CUPCAKE = 3;

        public static final int DONUT = 4;

        public static final int ECLAIR = 5;

        public static final int ECLAIR_0_1 = 6;

        public static final int ECLAIR_MR1 = 7;

        public static final int FROYO = 8;

        public static final int GINGERBREAD = 9;

        public static final int GINGERBREAD_MR1 = 10;

        public static final int HONEYCOMB = 11;

        public static final int HONEYCOMB_MR1 = 12;

        public static final int HONEYCOMB_MR2 = 13;

        public static final int ICE_CREAM_SANDWICH = 14;

        public static final int ICE_CREAM_SANDWICH_MR1 = 15;

        public static final int JELLY_BEAN = 16;

        public static final int JELLY_BEAN_MR1 = 17;

        public static final int JELLY_BEAN_MR2 = 18;

        public static final int KITKAT = 19;

        public static final int KITKAT_WATCH = 20;

        public static final int L = 21;

        public static final int LOLLIPOP = 21;

        public static final int LOLLIPOP_MR1 = 22;

        public static final int M = 23;

        public static final int N = 24;

        public static final int N_MR1 = 25;

        public static final int O = 26;

        public static final int O_MR1 = 27;

        public static final int P = 28;

        public static final int Q = 29;

        public static final int R = 30;

        public static final int S = 31;

        public static final int S_V2 = 32;

        public static final int TIRAMISU = 33;
    }

    public static final String TYPE = getString("ro.build.type");

    public static final String TAGS = getString("ro.build.tags");

    public static final String FINGERPRINT = deriveFingerprint();

    private static String deriveFingerprint() {
        String finger = SystemProperties.get("ro.build.fingerprint");
        if (TextUtils.isEmpty(finger)) {
            finger = getString("ro.product.brand") + '/' +
                    getString("ro.product.name") + '/' +
                    getString("ro.product.device") + ':' +
                    getString("ro.build.version.release") + '/' +
                    getString("ro.build.id") + '/' +
                    getString("ro.build.version.incremental") + ':' +
                    getString("ro.build.type") + '/' +
                    getString("ro.build.tags");
        }
        return finger;
    }

    public static void ensureFingerprintProperty() {
        if (TextUtils.isEmpty(SystemProperties.get("ro.build.fingerprint"))) {
            try {
                SystemProperties.set("ro.build.fingerprint", FINGERPRINT);
            } catch (IllegalArgumentException e) {
                Slog.e(TAG, "Failed to set fingerprint property", e);
            }
        }
    }

    public static final int HW_TIMEOUT_MULTIPLIER =
        SystemProperties.getInt("ro.hw_timeout_multiplier", 1);

    public static final boolean IS_TREBLE_ENABLED =
        SystemProperties.getBoolean("ro.treble.enabled", false);

    public static boolean isBuildConsistent() {

        if (IS_ENG) return true;

        if (IS_TREBLE_ENABLED) {

            int result = VintfObject.verifyWithoutAvb();

            if (result != 0) {
                Slog.e(TAG, "Vendor interface is incompatible, error="
                        + String.valueOf(result));
            }

            return result == 0;
        }

        final String system = SystemProperties.get("ro.system.build.fingerprint");
        final String vendor = SystemProperties.get("ro.vendor.build.fingerprint");
        final String bootimage = SystemProperties.get("ro.bootimage.build.fingerprint");
        final String requiredBootloader = SystemProperties.get("ro.build.expect.bootloader");
        final String currentBootloader = SystemProperties.get("ro.bootloader");
        final String requiredRadio = SystemProperties.get("ro.build.expect.baseband");
        final String currentRadio = joinListOrElse(
                TelephonyProperties.baseband_version(), "");

        if (TextUtils.isEmpty(system)) {
            Slog.e(TAG, "Required ro.system.build.fingerprint is empty!");
            return false;
        }

        if (!TextUtils.isEmpty(vendor)) {
            if (!Objects.equals(system, vendor)) {
                Slog.e(TAG, "Mismatched fingerprints; system reported " + system
                        + " but vendor reported " + vendor);
                return false;
            }
        }

        return true;
    }

    public static class Partition {

        public static final String PARTITION_NAME_SYSTEM = "system";

        public static final String PARTITION_NAME_BOOTIMAGE = "bootimage";

        public static final String PARTITION_NAME_ODM = "odm";

        public static final String PARTITION_NAME_OEM = "oem";

        public static final String PARTITION_NAME_PRODUCT = "product";

        public static final String PARTITION_NAME_SYSTEM_EXT = "system_ext";

        public static final String PARTITION_NAME_VENDOR = "vendor";

        private final String mName;
        private final String mFingerprint;
        private final long mTimeMs;

        private Partition(String name, String fingerprint, long timeMs) {
            mName = name;
            mFingerprint = fingerprint;
            mTimeMs = timeMs;
        }

        @NonNull
        public String getName() {
            return mName;
        }

        @NonNull
        public String getFingerprint() {
            return mFingerprint;
        }

        public long getBuildTimeMillis() {
            return mTimeMs;
        }

        @Override
        public boolean equals(@Nullable Object o) {
            if (!(o instanceof Partition)) {
                return false;
            }
            Partition op = (Partition) o;
            return mName.equals(op.mName)
                    && mFingerprint.equals(op.mFingerprint)
                    && mTimeMs == op.mTimeMs;
        }

        @Override
        public int hashCode() {
            return Objects.hash(mName, mFingerprint, mTimeMs);
        }
    }

    @NonNull
    public static List<Partition> getFingerprintedPartitions() {
        ArrayList<Partition> partitions = new ArrayList();

        String[] names = new String[] {
                Partition.PARTITION_NAME_BOOTIMAGE,
                Partition.PARTITION_NAME_ODM,
                Partition.PARTITION_NAME_PRODUCT,
                Partition.PARTITION_NAME_SYSTEM_EXT,
                Partition.PARTITION_NAME_SYSTEM,
                Partition.PARTITION_NAME_VENDOR
        };
        for (String name : names) {
            String fingerprint = SystemProperties.get("ro." + name + ".build.fingerprint");
            if (TextUtils.isEmpty(fingerprint)) {
                continue;
            }
            long time = getLong("ro." + name + ".build.date.utc") * 1000;
            partitions.add(new Partition(name, fingerprint, time));
        }

        return partitions;
    }

    public static final long TIME = getLong("ro.build.date.utc") * 1000;
    public static final String USER = getString("ro.build.user");
    public static final String HOST = getString("ro.build.host");

    @UnsupportedAppUsage
    public static final boolean IS_DEBUGGABLE =
            SystemProperties.getInt("ro.debuggable", 0) == 1;

    @TestApi
    @SystemApi(client = SystemApi.Client.MODULE_LIBRARIES)
    public static boolean isDebuggable() {
        return IS_DEBUGGABLE;
    }

    public static final boolean IS_ENG = "eng".equals(TYPE);

    public static final boolean IS_USERDEBUG = "userdebug".equals(TYPE);

    public static final boolean IS_USER = "user".equals(TYPE);

    public static final boolean IS_ARC =
            SystemProperties.getBoolean("ro.boot.container", false);

    @SystemApi
    public static final boolean PERMISSIONS_REVIEW_REQUIRED = true;

    public static String getRadioVersion() {
        return joinListOrElse(TelephonyProperties.baseband_version(), null);
    }

    @UnsupportedAppUsage
    private static String getString(String property) {
        return SystemProperties.get(property, UNKNOWN);
    }

    private static String[] getStringList(String property, String separator) {
        String value = SystemProperties.get(property);
        if (value.isEmpty()) {
            return new String[0];
        } else {
            return value.split(separator);
        }
    }

    @UnsupportedAppUsage
    private static long getLong(String property) {
        try {
            return Long.parseLong(SystemProperties.get(property));
        } catch (NumberFormatException e) {
            return -1;
        }
    }

    private static <T> String joinListOrElse(List<T> list, String defaultValue) {
        String ret = list.stream().map(elem -> elem == null ? "" : elem.toString())
                .collect(Collectors.joining(","));
        return ret.isEmpty() ? defaultValue : ret;
    }
}